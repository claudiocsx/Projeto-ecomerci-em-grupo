<h1 align="center" >BACK-END BRANCH</h1>

<h2>Como iniciar</h2>
<p>Dentro do repositorio Server de um <code>npm install</code> para instalar as dependencias do projeto na reamificação backend da sua maquina.</p>

<b>OBS 1*</b><i>Sempre que for desenvolver, faça <code>git pull origin backend</code> e dentro de Server <code>npm install</code> para que sua maquina alinhe os dados do repositorio na sua maquina com os dados do repositorio no GitHub, lembre-se tambem de dar um <code>git pull origin backend</code> antes de dar um <code>git push origin backend</code>.</i>

<b>OBS 2*</b><i>O nome do arquivo <code>.env</code> é <code>.env.dev</code>. crie ele dentro da pasta src como está no <code>.env.example. Os dados do mesmo podem ser encontrados no trello no quadro backend.</code></i>

<h2>Regras</h2>

<ui>
    <li><i>O diretorio <code>src</code> será seu local de trabalho, <b>não remova nenhum diretorio ou arquivo.</b></i></li>
    <li><i>Caso crie algum diretorio ou arquivo para uso proprio como <code>testes/</code> ou <code>.env.dev</code> por exemplo, adicione eles no <code>.gitignore</code> pois o mesmo fara que tais arquivos sejam ignorados na hora de fazer o commit.</i></li>
</ui>

#
# Documentação
* [REGRAS DE NEGOCIO](Server/docs/regra-de-negocio.md)
* [ROTAS DE SERVIÇO](Server/docs/rotas-da-api.md)
