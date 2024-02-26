/*
** CREAR BASE DE DATO
*/
CREATE DATABASE andelogin;

/*
** CREAR TABLAS
*/
-- Crear tabla de Usuarios
-- Crear tabla de Usuarios
CREATE TABLE Usuarios (
    UsuarioID INT AUTO_INCREMENT PRIMARY KEY,
    NombreUsuario VARCHAR(50) NOT NULL,
    Contrase�a VARCHAR(255) NOT NULL, -- Almacenar hashes de contrase�as (longitud adecuada para almacenar hashes)
    CorreoElectronico VARCHAR(100) NOT NULL,
    Activo TINYINT NOT NULL DEFAULT 1, -- Indica si la cuenta est� activa o no
    UNIQUE (NombreUsuario), -- Asegura que no hayan nombres de usuario duplicados
    INDEX (CorreoElectronico) -- �ndice para b�squedas r�pidas por correo electr�nico
);

-- Crear tabla de Sesiones
CREATE TABLE Sesiones (
    SesionID INT AUTO_INCREMENT PRIMARY KEY,
    UsuarioID INT NOT NULL,
    FechaInicio DATETIME NOT NULL,
    FechaUltimaActividad DATETIME,
    FechaCierre DATETIME, -- Agregar campo para registrar el cierre de sesi�n
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(UsuarioID)
);
