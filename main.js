        // Função para simular autenticação do usuário
        function authenticateUser(event) {
            event.preventDefault(); // Impede o envio do formulário padrão

            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            // Simulação de validação de login (substitua com sua lógica real)
            if (validateLogin(username, password)) {
                // Autenticação bem-sucedida, exibe o conteúdo após o login
                document.getElementById('loginContent').style.display = 'none'; // Esconde o formulário de login
                document.getElementById('mainContent').style.display = 'block'; // Exibe o conteúdo principal
                document.getElementById('sidebar').style.display = 'block'; // Exibe a barra lateral com categorias
            } else {
                alert('Credenciais inválidas. Tente novamente.');
            }
        }

        // Função para simular validação de login (substitua com sua lógica real)
        function validateLogin(username, password) {
            // Aqui você faria a validação em uma base de dados
            // Por exemplo, comparando com uma lista de usuários e senhas válidos
            var validUsers = {
                'usuario1': 'senha1',
                'usuario2': 'senha2',
                'usuario3': 'senha3'
            };

            // Verifica se o usuário e senha estão na lista de usuários válidos
            return validUsers.hasOwnProperty(username) && validUsers[username] === password;
        }

        // Função para carregar o PDF na div principal
        function loadPDF(pdfUrl) {
            var mainContent = document.getElementById('mainContent');
            mainContent.innerHTML = ''; // Limpa o conteúdo atual da div

            var pdfObject = document.createElement('object');
            pdfObject.data = pdfUrl;
            pdfObject.type = 'application/pdf';
            pdfObject.width = '100%';
            pdfObject.height = '600px'; // Define a altura desejada do objeto PDF
            pdfObject.style.border = '1px solid #ccc';

            mainContent.appendChild(pdfObject);
        }
		function toggleSubcategories(category) {
            var subcategories = document.getElementsByClassName('subcategories');

            // Esconde todas as subcategorias
            Array.from(subcategories).forEach(function(subcategory) {
                if (subcategory.id !== 'sub-' + category) {
                    subcategory.style.display = 'none';
                }
            });

            // Mostra ou esconde a subcategoria clicada
            var targetSubcategory = document.getElementById('sub-' + category);
            if (targetSubcategory.style.display === 'block') {
                targetSubcategory.style.display = 'none';
            } else {
                targetSubcategory.style.display = 'block';
            }
        }
		
		
