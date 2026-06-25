// Mapeo de objetos de las operaciones disponibles
        const operacionesDisponibles = [
            { id: 1, tipo: "Suma", signo: "+" },
            { id: 2, tipo: "Resta", signo: "-" },
            { id: 3, tipo: "Multiplicación", signo: "*" },
            { id: 4, tipo: "División", signo: "/" }
        ];

        // Funciones individuales de las operaciones posibles
        function sumar(a, b) {
            return a + b;
        }

        function restar(a, b) {
            return a - b;
        }

        function multiplicar(a, b) {
            return a * b;
        }

        function dividir(a, b) {
            // Validamos para evitar la división por cero
            if (b === 0) {
                return "Error (No se puede dividir por cero)";
            }
            return a / b;
        }

        // Función que solicita los números al usuario y los valida (Llamar funciones dentro de otras)
        function pedirNumeros() {
            let num1 = parseFloat(prompt("Ingrese el primer número:"));
            let num2 = parseFloat(prompt("Ingrese el segundo número:"));

            // Validación: Control de entradas para evitar errores sobre numeros
            if (isNaN(num1) || isNaN(num2)) {
                alert("Error: Uno o ambos valores ingresados no son números válidos.");
                return null; // Retorna null si la validación falla
            }

            return { n1: num1, n2: num2 }; // Retorna un objeto con ambos números
        }

        // Menú principal de la web
        function iniciarCalculadora() {
            let opcion = "";

            // Bucle 'while' para que el menú se repita hasta que el usuario decida salir
            while (opcion !== "5") {

                // Muestra las opciones en la consola usando forEach antes del prompt
                console.clear();
                console.log("--- HISTORIAL DE OPERACIONES CONFIGURADAS ---");
                operacionesDisponibles.forEach(op => {
                    console.log(`Opción [${op.id}] -> Realizar ${op.tipo} (${op.signo})`);
                });

                // Desplegamos el menú interactivo por prompt
                opcion = prompt(
                    "--- MENÚ CALCULADORA WEB ---\n" +
                    "1. Sumar (+)\n" +
                    "2. Restar (-)\n" +
                    "3. Multiplicar (*)\n" +
                    "4. Dividir (/)\n" +
                    "5. Salir del programa\n\n" +
                    "Seleccione una opción (1-5):"
                );

                // Si elige salir, cortamos el switch de inmediato sin pedir números
                if (opcion === "5") {
                    alert("👋 Saliendo de la calculadora. ¡Hasta luego!");
                    break;
                }

                // Estructura condicional Switch para evaluar la opción seleccionada
                switch (opcion) {
                    // Llamada de las funciones internas
                    case "1": {
                        const numeros = pedirNumeros();
                        if (numeros !== null) {
                            let resultado = sumar(numeros.n1, numeros.n2);
                            alert(`El resultado de la Suma es: ${resultado}`);
                        }
                        break;
                    }
                    case "2": {
                        const numeros = pedirNumeros();
                        if (numeros !== null) {
                            let resultado = restar(numeros.n1, numeros.n2);
                            alert(`El resultado de la Resta es: ${resultado}`);
                        }
                        break;
                    }
                    case "3": {
                        const numeros = pedirNumeros();
                        if (numeros !== null) {
                            let resultado = multiplicar(numeros.n1, numeros.n2);
                            alert(`El resultado de la Multiplicación es: ${resultado}`);
                        }
                        break;
                    }
                    case "4": {
                        const numeros = pedirNumeros();
                        if (numeros !== null) {
                            let resultado = dividir(numeros.n1, numeros.n2);
                            alert(`El resultado de la División es: ${resultado}`);
                        }
                        break;
                    }
                    default:
                        alert("Opción inválida. Por favor, seleccione un número del 1 al 5.");
                        break;
                }
            }
        }

        // Ejecutamos el programa principal
        iniciarCalculadora();