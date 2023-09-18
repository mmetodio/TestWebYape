Feature: Pruebas de autenticación de usuario

  Background: 
    Given El usuario navega en la aplicación
    And El usuario hace clic en el enlace de inicio de sesión

  Scenario: El inicio de sesión debería ser exitoso
    And El usuario ingresa el nombre de usuario como "meto"
    And El usuario ingresa la contraseña como "Pass1234"
    When El usuario hace clic en el botón de inicio de sesión
    Then El inicio de sesión debe ser exitoso

  Scenario: El inicio de sesión no debe ser exitoso
    Given Usuario ingresa el nombre de usuario como "metodi"
    Given El usuario ingresa la contraseña como "pass987"
    When El usuario hace clic en el botón de inicio de sesión
    But El inicio de sesión debería fallar
