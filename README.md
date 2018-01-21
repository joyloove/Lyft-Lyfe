# ♡ L Y F T ♡

Desarrolla una web-app que replique el sitio de Lyft, en este reto deberás cumplir los pasos necesarios para que tu usuario pueda registrarse.

## FLUJO DE LA APLICACIÓN
Vista splash con duración de 2 a 5 segundos que redirecciona a tu vista de inicio. La vista de inicio cuenta con dos botones, en esta ocasión seguiremos el flujo de SING UP.

![splash.png](assets/images/splash.png)

En la siguiente vista tenemos un formulario donde nuestro usuario puede escoger el país y debe ingresar su número de teléfono. El botón de NEXT debe estar deshabilitado hasta que se ingrese un número de 10 dígitos.

![ingreso-numero.jpg](assets/images/ingreso-numero.jpg)

Una vez ingresado el número de teléfono se habilita el botón y al dar click debe enviar una alerta con un código generado aleatoriamente (LAB-000) y redireccionar a la siguiente vista.

![geneacion-codigo.jpg](assets/images/generacion-codigo.jpg)

En esta vista se debe ingresar el código dado anteriormente y una vez hecho esto se habilita el botón que redirecciona a nuestro usuario a la vista donde ingresa sus datos. (Puede tener la opción de enviar otro código.)

![verificacion-numero.jpg](assets/images/verificacion-numero.jpg)
![buttons.jpg](assets/images/buttons.jpg)

Para ingresar sus datos necesitamos un formulario que le pida su nombre, apellido y correo electrónico. Deberá también tener un checkbox para que se acepten los términos y condiciones del servicio.

![ingreso-datos.jpg](assets/images/ingreso-datos.jpg)
![buttons.jpg](assets/images/buttons.jpg)

Ya que se ha realizado lo anterior, sólo se deberá mostrar una vista al usuario que le indique que ha concluido con el registro exitosamente.

![final.png](assets/images/final.png)

NOTA: Todas nuestras vistas deben de contar con una manera de regresar a la vista anterior

https://joyloove.github.io/Lyft-Lyfe/
