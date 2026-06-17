clear; clc; clf;

% Sicherstellen, dass das Symbolic-Paket geladen ist
pkg load symbolic;

global e_on h_on;
e_on = true;
h_on = true;

% Geometrie
R = 0.005;
l = 0.020;

% Fixe Frequenzen
f = 40 * 10^9;
f_ansicht = 1;

% Darstellungsvariablen
dr     = 0.0004;
d_phi  = 10 * (pi/180);
d_z    = 0.0015;

% Modus-Auswahl und Typ
m = 1;
n = 1;
is_TM = false;

E0 = 10;
Z = 3.77;

% Symbolische Felder (Für Ableitungen)
syms x_sym t_sym x_coord y_coord z_coord R_sym k_c_sym k_z_sym E0_sym

% Besselfunktion und ihre erste Ableitung definieren
J_m = besselj(m, x_sym);
dJ_m = diff(J_m, x_sym);

% In numerische Funktionen umwandeln
J_num = matlabFunction(J_m);
dJ_num = matlabFunction(dJ_m);


if is_TM
    start_guess = pi * (n + m/2 - 0.25);
    target_fun  = J_num;
else
    start_guess = pi * (n + m/2 - 0.75);
    target_fun  = dJ_num;
end


options = optimset('Display', 'off');
x_mn = fzero(target_fun, start_guess, options);
f_g = (x_mn * 3 * 10^8) / (2 * pi * R);

% Vektorlisten für das Gitter
r_p   = dr : dr : (R - dr);
phi_p = 0 : d_phi : (2*pi - d_phi);
z_p   = d_z : d_z : (l - d_z);

[R_mesh, Phi_mesh, Z_mesh] = meshgrid(r_p, phi_p, z_p);
X_grid = R_mesh .* cos(Phi_mesh);
Y_grid = R_mesh .* sin(Phi_mesh);
Z_grid = Z_mesh;

% Wellenparameter
k_0 = (2 * pi * f) / (3 * 10^8);
k_c = x_mn / R;
if k_0 > k_c
    k_z = sqrt(k_0^2 - k_c^2);
else
    k_z = 0;
end

r_sym   = sqrt(x_coord^2 + y_coord^2);
phi_sym = atan2(y_coord, x_coord);

% E-Felder je nach Typ definieren
if is_TM
    Ez_sym = E0_sym * J_num(k_c_sym * r_sym) * cos(m * phi_sym) * cos(k_z_sym * z_coord - t_sym);
    Ex_sym = sym(0);
    Ey_sym = sym(0);
else

    Ez_sym = sym(0);

    dJ_at_r = subs(dJ_m, x_sym, k_c_sym * r_sym);

    Er_zyl   = -E0_sym * (m / (k_c_sym * r_sym)) * besselj(m, k_c_sym * r_sym) * sin(m * phi_sym);
    Ephi_zyl = -E0_sym * dJ_at_r * cos(m * phi_sym);

    Ex_sym = (Er_zyl * cos(phi_sym) - Ephi_zyl * sin(phi_sym)) * cos(k_z_sym * z_coord - t_sym);
    Ey_sym = (Er_zyl * sin(phi_sym) + Ephi_zyl * cos(phi_sym)) * cos(k_z_sym * z_coord - t_sym);
end


% H-Felder Berechnen
dEx_dy_sym = diff(Ex_sym, y_coord);
dEx_dz_sym = diff(Ex_sym, z_coord);

dEy_dx_sym = diff(Ey_sym, x_coord);
dEy_dz_sym = diff(Ey_sym, z_coord);

dEz_dx_sym = diff(Ez_sym, x_coord);
dEz_dy_sym = diff(Ez_sym, y_coord);

Hx_sym = (1 / (Z * k_0)) * (dEz_dy_sym - dEy_dz_sym);
Hy_sym = (1 / (Z * k_0)) * (dEx_dz_sym - dEz_dx_sym);
Hz_sym = (1 / (Z * k_0)) * (dEy_dx_sym - dEx_dy_sym);

% Einsetzen der bekannten Konstanten in die symbolischen Ausdrücke
sub_list = [E0_sym, k_c_sym, k_z_sym];
sub_vals = [E0, k_c, k_z];

Ex_sym = subs(Ex_sym, sub_list, sub_vals);
Ey_sym = subs(Ey_sym, sub_list, sub_vals);
Ez_sym = subs(Ez_sym, sub_list, sub_vals);
Hx_sym = subs(Hx_sym, sub_list, sub_vals);
Hy_sym = subs(Hy_sym, sub_list, sub_vals);
Hz_sym = subs(Hz_sym, sub_list, sub_vals);


Ex = matlabFunction(Ex_sym, 'Vars', [t_sym, x_coord, y_coord, z_coord]);
Ey = matlabFunction(Ey_sym, 'Vars', [t_sym, x_coord, y_coord, z_coord]);
Ez = matlabFunction(Ez_sym, 'Vars', [t_sym, x_coord, y_coord, z_coord]);

Hx = matlabFunction(Hx_sym, 'Vars', [t_sym, x_coord, y_coord, z_coord]);
Hy = matlabFunction(Hy_sym, 'Vars', [t_sym, x_coord, y_coord, z_coord]);
Hz = matlabFunction(Hz_sym, 'Vars', [t_sym, x_coord, y_coord, z_coord]);


fig = figure(1);
Ex_num = Ex(0, X_grid, Y_grid, Z_grid);
Ey_num = Ey(0, X_grid, Y_grid, Z_grid);
Ez_num = Ez(0, X_grid, Y_grid, Z_grid);

Hx_num = Hx(0, X_grid, Y_grid, Z_grid);
Hy_num = Hy(0, X_grid, Y_grid, Z_grid);
Hz_num = Hz(0, X_grid, Y_grid, Z_grid);


if isscalar(Ex_num); Ex_num = zeros(size(X_grid)); end
if isscalar(Ey_num); Ey_num = zeros(size(X_grid)); end
if isscalar(Ez_num); Ez_num = zeros(size(X_grid)); end
if isscalar(Hx_num); Hx_num = zeros(size(X_grid)); end
if isscalar(Hy_num); Hy_num = zeros(size(X_grid)); end
if isscalar(Hz_num); Hz_num = zeros(size(X_grid)); end

q_e = quiver3(X_grid, Y_grid, Z_grid, Ex_num, Ey_num, Ez_num, 1.5, 'Color', 'b', 'LineWidth', 1.2);
hold on;
q_h = quiver3(X_grid, Y_grid, Z_grid, Hx_num, Hy_num, Hz_num, 1.5, 'Color', 'r', 'LineWidth', 1.2);
hold off;

grid on;
axis([-R R -R R 0 l]);
axis equal;
view(65, 20);
xlabel('X'); ylabel('Y'); zlabel('Z');
mode_type = 'TE'; if is_TM; mode_type = 'TM'; end
title(sprintf('Rundhohlleiter %s_{%d%d}', mode_type, m, n), "fontsize", 20);

set(fig, 'KeyPressFcn', @(src, event) hohlleiter_key_callback(event, q_e, q_h));


animation_speed = 2 * pi * f_ansicht;
tic;

function hohlleiter_key_callback(event, q_e, q_h)
    global e_on h_on;
    switch event.Key
        case 'e'
            e_on = ~e_on;
            if e_on; set(q_e, 'Visible', 'on'); else; set(q_e, 'Visible', 'off'); end
        case 'h'
            h_on = ~h_on;
            if h_on; set(q_h, 'Visible', 'on'); else; set(q_h, 'Visible', 'off'); end
    end
end

while true
    current_time = toc;
    t_val = current_time * animation_speed;

    if e_on
      Ex_num = Ex(t_val, X_grid, Y_grid, Z_grid);
      Ey_num = Ey(t_val, X_grid, Y_grid, Z_grid);
      Ez_num = Ez(t_val, X_grid, Y_grid, Z_grid);
      if isscalar(Ex_num); Ex_num = zeros(size(X_grid)); end
      if isscalar(Ey_num); Ey_num = zeros(size(X_grid)); end
      if isscalar(Ez_num); Ez_num = zeros(size(X_grid)); end
    else
      Ex_num = zeros(size(X_grid)); Ey_num = zeros(size(X_grid)); Ez_num = zeros(size(X_grid));
    end

    if h_on
      Hx_num = Hx(t_val, X_grid, Y_grid, Z_grid);
      Hy_num = Hy(t_val, X_grid, Y_grid, Z_grid);
      Hz_num = Hz(t_val, X_grid, Y_grid, Z_grid);
      if isscalar(Hx_num); Hx_num = zeros(size(X_grid)); end
      if isscalar(Hy_num); Hy_num = zeros(size(X_grid)); end
      if isscalar(Hz_num); Hz_num = zeros(size(X_grid)); end
    else
      Hx_num = zeros(size(X_grid)); Hy_num = zeros(size(X_grid)); Hz_num = zeros(size(X_grid));
    end

    set(q_e, 'UData', Ex_num, 'VData', Ey_num, 'WData', Ez_num);
    set(q_h, 'UData', Hx_num, 'VData', Hy_num, 'WData', Hz_num);

    drawnow

    if ~ishghandle(q_e) || ~ishghandle(q_h)
        break;
    end
end
