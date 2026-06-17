clear; clc; clf;

pkg load symbolic;

global e_on h_on;
e_on = true;
h_on = true;

% Geometrie
a = 0.00254;
b = 0.00127;
l = 0.0025;


% Fixe Frequenzen
f = 200 * 10^9;
f_ansicht = 1;

% Schritte der Vektorpunkten
d_xy = 0.0001;
d_z  = 0.0001;

% Modus-Auswahl und Typ
m = 1;
n = 1;
is_TM = false;

E0 = 100;
Z = 10;

% Vektorlisten für das Gitter
X_p = d_xy : d_xy : (a-d_xy);
Y_p = d_xy : d_xy : (b-d_xy);
Z_p = d_z  : d_z  : (l-d_z);

[X_grid, Y_grid, Z_grid] = meshgrid(X_p, Y_p, Z_p);

% Symbolische Felder (Für Ableitungen)
syms t_sym x_coord y_coord z_coord k_x_sym k_y_sym k_z_sym E0_sym Ex0_sym Ey0_sym

% Physikalische Wellenleiterparameter
k_x_val = (m * pi) / a;
k_y_val = (n * pi) / b;
k_0_val = (2 * pi * f) / (3 * 10^8);


% Schutz vor imaginären Zahlen in k_z
if k_0_val > sqrt(k_x_val^2 + k_y_val^2)
    k_z_val = sqrt(k_0_val^2 - k_x_val^2 - k_y_val^2);
else
    k_z_val = 0;
end

f_g = sqrt(((m*pi)/a)^2 + ((n*pi)/b)^2) / (2*pi) * 3*10^8

% E-Felder je nach Typ definieren
if is_TM
    Ex0_val = -E0 * k_x_val / (k_x_val^2 + k_y_val^2);
    Ey0_val = -E0 * k_y_val / (k_x_val^2 + k_y_val^2);

    Ex_sym = 0;
    Ey_sym = 0;
    Ez_sym = E0_sym  * sin(k_x_sym * x_coord) * sin(k_y_sym * y_coord) * cos(k_z_sym * z_coord - t_sym);
else
    Ex0_val = E0 * n / b;
    Ey0_val = E0 * m / a;

    Ex_sym = Ex0_sym * cos(k_x_sym * x_coord) * sin(k_y_sym * y_coord) * sin(k_z_sym * z_coord - t_sym);
    Ey_sym = Ey0_sym * sin(k_x_sym * x_coord) * cos(k_y_sym * y_coord) * sin(k_z_sym * z_coord - t_sym);
    Ez_sym = sym(0);
end

% H-Felder Berechnen
dEx_dy_sym = diff(Ex_sym, y_coord);
dEx_dz_sym = diff(Ex_sym, z_coord);

dEy_dx_sym = diff(Ey_sym, x_coord);
dEy_dz_sym = diff(Ey_sym, z_coord);

dEz_dx_sym = diff(Ez_sym, x_coord);
dEz_dy_sym = diff(Ez_sym, y_coord);

Hx_sym = (1 / Z) * (dEz_dy_sym - dEy_dz_sym);
Hy_sym = (1 / Z) * (dEx_dz_sym - dEz_dx_sym);
Hz_sym = (1 / Z) * (dEy_dx_sym - dEx_dy_sym);


sub_list = [E0_sym, Ex0_sym, Ey0_sym, k_x_sym, k_y_sym, k_z_sym];
sub_vals = [E0, Ex0_val, Ey0_val, k_x_val, k_y_val, k_z_val];

Ex_sym = subs(Ex_sym, sub_list, sub_vals);
Ey_sym = subs(Ey_sym, sub_list, sub_vals);
Ez_sym = subs(Ez_sym, sub_list, sub_vals);

Hx_sym = subs(Hx_sym, sub_list, sub_vals);
Hy_sym = subs(Hy_sym, sub_list, sub_vals);
Hz_sym = subs(Hz_sym, sub_list, sub_vals);

% Funktionen definieren, basiert auf die symbolischen Funktionen
Ex = matlabFunction(Ex_sym, 'Vars', [t_sym, x_coord, y_coord, z_coord]);
Ey = matlabFunction(Ey_sym, 'Vars', [t_sym, x_coord, y_coord, z_coord]);
Ez = matlabFunction(Ez_sym, 'Vars', [t_sym, x_coord, y_coord, z_coord]);

Hx = matlabFunction(Hx_sym, 'Vars', [t_sym, x_coord, y_coord, z_coord]);
Hy = matlabFunction(Hy_sym, 'Vars', [t_sym, x_coord, y_coord, z_coord]);
Hz = matlabFunction(Hz_sym, 'Vars', [t_sym, x_coord, y_coord, z_coord]);

% Initialize Figure
fig = figure(1);
Ex_num = Ex(0, X_grid, Y_grid, Z_grid);
Ey_num = Ey(0, X_grid, Y_grid, Z_grid);
Ez_num = Ez(0, X_grid, Y_grid, Z_grid);

Hx_num = Hx(0, X_grid, Y_grid, Z_grid);
Hy_num = Hy(0, X_grid, Y_grid, Z_grid);
Hz_num = Hz(0, X_grid, Y_grid, Z_grid);

% Skalarwerte in Listen umwandeln
if isscalar(Ex_num); Ex_num = zeros(size(X_grid)); end
if isscalar(Ey_num); Ey_num = zeros(size(X_grid)); end
if isscalar(Ez_num); Ez_num = zeros(size(X_grid)); end
if isscalar(Hx_num); Hx_num = zeros(size(X_grid)); end
if isscalar(Hy_num); Hy_num = zeros(size(X_grid)); end
if isscalar(Hz_num); Hz_num = zeros(size(X_grid)); end

q_e = quiver3(X_grid, Y_grid, Z_grid, Ex_num, Ey_num, Ez_num, 0.8, 'Color', 'b', 'LineWidth', 1.2);
hold on;
q_h = quiver3(X_grid, Y_grid, Z_grid, Hx_num, Hy_num, Hz_num, 0.8, 'Color', 'r', 'LineWidth', 1.2);
hold off;

grid on;
axis([0 a 0 b 0 l]);
axis equal;
view(65, 20);
xlabel('X'); ylabel('Y'); zlabel('Z');
mode_title = 'TE'; if is_TM; mode_title = 'TM'; end
title(sprintf('%s_{%d%d}', mode_title, m, n), "fontsize", 20);

set(q_e, "linewidth", 2);
set(q_h, "linewidth", 2);

set(fig, 'KeyPressFcn', @(src, event) hohlleiter_key_callback(event, q_e, q_h));

animation_speed = 2*pi*f_ansicht;
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

    if e_on; set(q_e, 'Visible', 'on'); else; set(q_e, 'Visible', 'off'); end
    if h_on; set(q_h, 'Visible', 'on'); else; set(q_h, 'Visible', 'off'); end

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
