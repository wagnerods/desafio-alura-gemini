console.log('Hello World!');

const ctx = document.getElementById('chart-petr4').getContext('2d');
const chartPetr4  = new Chart(ctx, {
    type: 'line',   

    data: {
        labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
        datasets: [{
            label: 'Preço da Ação',
            data: [12, 19, 3, 5, 2],
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }
});

