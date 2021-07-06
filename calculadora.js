function projecaoAnuncio(valor_investido) {
    var qtde_visualizada = 0;
    var qtde_compartilhada= 0;
    // A cada R$ 1,00 investido. 30 pessoas visualizam o anúncio original (não compartilhado).
    qtde_visualizada = valor_investido * 30;
    //a cada 100 pessoas que visualizam o anúncio 12 clicam nele.
    qtde_click = Math.round(Math.round(qtde_visualizada/100) * 12);
    //A cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.
    qtde_compartilhada = Math.round(Math.round(qtde_click/20) * 3);
    //A cada compartilhamento nas redes sociais gera 40 novas visualizações.
    
    i=4;
    temp_visualizacao=0
    temp_compartilhada=qtde_compartilhada
    //console.log("[Original] Alcance Visualizacao "+qtde_visualizada+","+temp_compartilhada+" compartilhamento")
    
    for(i=0;i<3;i++){
        temp_click=(Math.round((temp_compartilhada*40)/100)*12); 
        temp_compartilhada = Math.round(Math.round(temp_click/20) * 3);
        temp_visualizacao = temp_compartilhada*40        
        qtde_visualizada+=temp_visualizacao
        qtde_compartilhada+=temp_compartilhada;
        //console.log("["+(i+1)+"] Alcance Visualizacao "+temp_visualizacao+","+temp_compartilhada+" compartilhamento")
    }
    return [qtde_visualizada, qtde_click, qtde_compartilhada];  
}
if (require.main === module) {
	    
	const readline = require('readline');

	const rl = readline.createInterface({
    		input: process.stdin,
    		output: process.stdout
	});
	rl.question(
                'Qual o valor investido em reais do anuncio ?',
                function (x){
                        retorno = projecaoAnuncio(x);
                        console.log(retorno[0] + " Visualizações ,"+retorno[1] + " Clicks ,"+retorno[2]+" Compartilhamento");
                        rl.close();
                }
    	)
}

module.exports = projecaoAnuncio
