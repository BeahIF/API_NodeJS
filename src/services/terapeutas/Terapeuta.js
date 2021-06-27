const sequelizeAgendamento = require('../../models/terapeutas/SequelizeTerapeuta')
const moment = require('moment');
// const CampoInvalido = require('../../errors/CampoInvalido')
// const NaoEncontrado = require('../../errors/NaoEncontrado')
// const DadosNaoInformados = require('../../errors/DadosNaoInformados');
// const CampoQtdMaxima = require('../../errors/CampoQtdMaxima');
// const CampoQtdMinima = require('../../errors/CampoQtdMinima');
class Terapeuta {
    constructor({id,nome,experiencia_profissional,formacao,registro, data_criacao,data_atualizacao}){
        this.id=id;
        this.nome=nome;
        this.experiencia_profissional=experiencia_profissional;
        this.formacao=formacao;
        this.registro=registro;
        this.data_criacao=data_criacao;
        this.data_atualizacao=data_atualizacao;
    };
    async criar(){
        // this.validar()
        console.log("pelo menos aqui?")
        const result = await sequelizeAgendamento.adicionar({
            nome: this.nome,
            experiencia_profissional:this.experiencia_profissional,
            formacao:this.formacao,
            registro:this.registro
        });
        console.log("e aqui?")
        this.id=result.id;
        this.data_criacao=result.data_criacao;
        this.data_atualizacao=result.data_atualizacao;

    };
    async buscar(){
        const result = await sequelizeAgendamento.buscarPorPK(this.id);
        this.nome=result.nome;
        this.experiencia_profissional=result.experiencia_profissional;
        this.formacao = result.formacao;
        this.registro = result.registro;
        this.data_criacao = result.data_criacao;
        this.data_atualizacao = result.data_atualizacao;
    }
    async atualizar(){
        await sequelizeAgendamento.buscarPorPK(this.id);
        const camposAtualizaveis =['nome','experiencia_profissional','formacao','registro']
        const dadosAtualizar = {};
        camposAtualizaveis.forEach((campo)=>{
            const valor = this[campo];
            if(typeof valor === 'string' && valor.length > 0){
                dadosAtualizar[campo]=valor
            }

        });
        if(Object.keys(dadosAtualizar).length === 0){
            throw DadosNaoInformados()
            // throw new Error('Dados não informados')
        };
        await sequelizeAgendamento.atualizar(this.id, dadosAtualizar)
    }
    validar(){
        const camposObrigatorios = ['nome','experiencia_profissional','formacao','registro']
        const dataHoje=    moment().format('YYYY-MM-DD');

        camposObrigatorios.forEach((campo)=>{
            const valor = this[campo];
            
            if(typeof valor !== 'string' || valor.length === 0){
                throw new CampoInvalido(campo);
                // throw new Error("Campo inválido")
            }
            // if(campo == "data_agendamento"){
                // if(!moment(valor).isSameOrAfter(dataHoje)){
                    // throw new Error('Data inválida!')
                // }
                // const dataCorreta = moment(moment(valor), "DD/MM/YYYY", true);

                // if(!dataCorreta.isValid()){
                    // throw new FormatoInvalido(campo);
                // }
            // }
            if(valor.length() > 60){
                throw new CampoQtdMaxima(campo);
            }
            if(valor.length() < 8 && (campo !== 'nome_cliente' && campo !== 'nome_servico')){
                throw new CampoQtdMinima(campo);
            }
        })
    }
    async remover(){
        await sequelizeAgendamento.remover(this.id);
    }
}
module.exports = Terapeuta;
