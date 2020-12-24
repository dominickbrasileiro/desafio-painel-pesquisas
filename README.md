<h2 align="center">
  Desafio - Painel Pesquisas e Consultoria
</h2>

<br />

<p align="center">
  <a href="#sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#aprendizado">Aprendizado</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-rodar">Como Rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licença">Licença</a>
</p>

<br />

<p align="center">
  <img alt="Painel Pesquisas e Consultoria" src=".github/brand.png" width="100%">
</p>

<br />

## Sobre o desafio

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Uma das atividades da **Painel Pesquisas e Consultoria** é o mapeamento de
endereços em uma determinada região geográfica. Os pesquisadores são
equipados com Tablets e aparelhos GPS para tal mapeamento. O trabalho deles é ir de
casa em casa coletando informações sobre a população local.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; O desafio consiste em criar um formulário (Página WEB), onde os pesquisadores
vão inserir os endereços dos moradores e esses dados serão estruturados em JSON. As
coordenadas geográficas deverão ser inseridas manualmente via formulário em formato de graus, minutos e segundos (GMS) e transformadas em graus decimais (GD).

Exemplo de estruturação dos dados:

```json
{
  "TIPO_LOGRADOURO": "RUA",
  "NOME_LOGRADOURO": "Ibirapuera",
  "NUMERO_DA_RESIDENCIA": "705",
  "BAIRRO_LOCALIDADE": "Floresta",
  "COMPLEMENTO": "Sala D",
  "LATITUDE": -48.854642,
  "LONGITUDE": -26.339212
}
```

## Aprendizado

Durante o desenvolvimento do projeto, me deparei com a situação na qual eu precisaria transformar graus, minutos e segundos para graus decimais. Conforme requisitado no desafio, eu não poderia copiar códigos prontos da web. Então, fui estudar como essa conversão é feita e cheguei na seguinte solução:

<br />

**GD = (M / 60) + (S / 3600) + G**

<br />

Onde:

**GD**: graus decimais

**M**: minutos

**S**: segundos

**G**: graus

<br />

Quando falamos de coordenadas geográficas, depois de aplicar a fórmula é necessário verificar o sinal do resultado. No caso de **latitude**, o valor deverá ser **positivo** ao norte e **negativo** ao sul. No caso de **longitude**, o valor deverá ser **negativo** ao oeste e **positivo** ao leste.

<br />

Links úteis:

- [How To: Calculate Decimal Degrees from Degrees Minutes Seconds (DMS) manually](https://support.esri.com/en/technical-article/000007058)
## Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [HTML5](https://pt.wikipedia.org/wiki/HTML5)
- [CSS3](https://pt.wikipedia.org/wiki/CSS3)
- [JavaScript](https://www.javascript.com)

## Como Rodar

- Clone o repositório: `git clone https://github.com/dominickbrasileiro/desafio-painel-pesquisas`;
- Vá até o repositório: `cd desafio-painel-pesquisas`;
- Abra o arquivo `index.html` utilizando o seu navegador de preferência e pronto!

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/dominickbrasileiro/desafio-painel-pesquisas/blob/master/LICENSE) para mais detalhes.

---

Feito com ❤️ por Dominick Brasileiro 💎 [Entre em contato!](https://www.linkedin.com/in/dominickbrasileiro/)

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/dominickbrasileiro/)](https://www.linkedin.com/in/dominickbrasileiro/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:brasileiro.dominick@gmail.com)](mailto:brasileiro.dominick@gmail.com)
