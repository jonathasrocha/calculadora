## CALCULADORA PARTE 1 e PARTE 2  
DESAFIO TECNICO CAPGEMINI



### Parte 1

Crie um script em sua linguagem de programação preferida que receba o valor investido em reais e retorne uma projeção aproximada da quantidade máxima de pessoas que visualizarão o mesmo anúncio (considerando o anúncio original + os compartilhamentos)


a cada 100 pessoas que visualizam o anúncio 12 clicam nele.
a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.
cada compartilhamento nas redes sociais gera 40 novas visualizações.
30 pessoas visualizam o anúncio original (não compartilhado) a cada R$ 1,00 investido.
o mesmo anúncio é compartilhado no máximo 4 vezes em sequência
(1ª pessoa -> compartilha -> 2ª pessoa -> compartilha - > 3ª pessoa -> compartilha -> 4ª pessoa)


 

### Parte 2
Crie um sistema que permita o cadastro de anúncios. O anúncio deverá conter os seguintes dados:

- [x] nome do anúncio

- [x] cliente

- [x] data de início

- [x] data de término

- [x] investimento por dia

 

 O sistema fornecerá os relatórios de cada anúncio contendo:

- [x] valor total investido

- [x] quantidade máxima de visualizações

- [x] quantidade máxima de cliques

- [x] quantidade máxima de compartilhamentos

 

- [x] Os relatórios poderão ser filtrados por intervalo de tempo e cliente.



### Como compilar e executar o programa

* Para a criar o codigo ultilizei a linguagem de programação _Javascript_ 

* O arquivo com a liguagem esta com o nome e extensão _calculadora.js_

* A _calculadora.js_ para rodar o desafio devera ter instalado em sua maquina o [node](https://nodejs.org/en/) 

* Segunda parte ultilizei o _Docker_ com dois containers um para rodar o _Mongo_ (banco uasado para pessistir os dados) e o segundo para rodar o _node_.

* Para executar o sistema use apenas o comando abaixo que monta as imagens e roda os containers em background.

 `docker-compose up -d --build`
 
 * localhost:8080 porta de acesso
 

![Captura de Tela 2021-07-06 às 01 03 12](https://user-images.githubusercontent.com/63822305/124542775-64f0d780-ddfa-11eb-9a79-c4236efd3fe0.png)
 ![Captura de Tela 2021-07-06 às 01 04 39](https://user-images.githubusercontent.com/63822305/124542705-44288200-ddfa-11eb-85e1-6bc9a613b386.png)

 
 
 
 





