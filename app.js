function searchCompany() {
    // Obtém o valor digitado pelo usuário no campo de pesquisa
    const query = document.getElementById('searchInput').value.trim().toLowerCase();

    // Se a entrada de pesquisa estiver vazia, não faz nada
    if (query === '') {
        alert('Por favor, insira o nome de uma empresa ou ação para pesquisar.');
        return;
    }

    // Filtra os resultados das ações que correspondem ao nome da empresa ou código da ação
    const resultados = acoes.filter(acao => 
        acao.nome.toLowerCase().includes(query) || acao.codigo.toLowerCase().includes(query)
    );

    // Obtém o elemento onde os itens do carrossel serão inseridos
    const carouselItems = document.getElementById('carouselItems');
    carouselItems.innerHTML = ''; // Limpa os resultados anteriores

    // Verifica se há resultados
    if (resultados.length === 0) {
        alert('Nenhuma empresa ou ação encontrada.');
        return;
    }

    // Adiciona cada resultado ao carrossel
    resultados.forEach((acao, index) => {
        // Cria um item do carrossel para cada ação encontrada
        const itemDiv = document.createElement('div');
        itemDiv.className = `carousel-item ${index === 0 ? 'active' : ''}`; // Define a primeira como ativa

        // Cria o conteúdo do item do carrossel
        const contentDiv = document.createElement('div');
        contentDiv.className = 'd-flex justify-content-center align-items-center';
        contentDiv.style.minHeight = '200px'; // Define a altura mínima para o item

        // Formata as informações da ação
        const actionInfo = `
            <div class="text-center">
                <h3>${acao.nome} (${acao.codigo})</h3>
                <p>Setor: ${acao.setor}</p>
                <p>Preço: R$ ${acao.preco.toFixed(2)}</p>
            </div>
        `;
        contentDiv.innerHTML = actionInfo;

        // Adiciona o conteúdo ao item do carrossel
        itemDiv.appendChild(contentDiv);

        // Adiciona o item ao carrossel
        carouselItems.appendChild(itemDiv);
    });
}
