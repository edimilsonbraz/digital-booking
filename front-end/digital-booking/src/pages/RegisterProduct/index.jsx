import { useEffect, useState } from 'react';
import style from './style.module.css';
import api from '../../service/api';

export function ResgisterProduct() {

    const [cidades, setCidades] = useState([]);
    const [selectCidades, setSelectCidades] = useState();
    async function getCidades() {
        try {
            const response = await api.get('cidades')
            setCidades(response.data)
        } catch (error) {
            console.log('Erro ao buscar cidades' + error)
        }
    }

    const [categorias, setCategorias] = useState([]);
    const [selectCategoria, setSelectCategorias] = useState();
    async function getCategorias() {
        try {
            const response = await api.get('categoria')
            setCategorias(response.data)
        } catch (error) {
            console.log('Erro ao buscar categorias' + error)
        }

    }

    const [caracteristicas, setCaracteristicas] = useState([]);
    async function getCaracteristicas() {
        try {
            const response = await api.get('caracteristicas')
            setCaracteristicas(response.data)
        } catch (error) {
            console.log('Erro ao buscar caracteristicas' + error)
        }

    }

    
    useEffect(() => {
        getCidades();
        getCategorias();
        getCaracteristicas()
    }, []);

    const [dataForm, setDataForm] = useState(
        { nomeProduto: '', categoria: '', endereco: '', cidade: '', descricao: '', nomeAtributoValue:'', nomeAtributo:[], iconeAtributo: [], iconeValue: '', politicaSaudeSeguranca: '', politicaCancelamento: '', politicaRegrasCasa: '', imagens: [], imagemValue:''}
    );

    //Metodo de manipulação de envio de dados api
    const handlerSubmit = (e) => {
        e.preventDefault()
        console.log(dataForm);
    }

    // Metodo que adiciona uma imagem de cada vez
    const addImage = (e) =>
    {
        e.preventDefault();
        
        setDataForm({...dataForm, imagens:[...dataForm.imagens, dataForm.imagemValue]});
        // setDataForm({...dataForm, imagemValue:''});
    }

    // Metodo que adiciona o nome do atributo e o icone
    const addIcone = (e) =>
    {
        e.preventDefault();
        
        setDataForm({...dataForm, iconeAtributo:[...dataForm.iconeAtributo, dataForm.iconeValue], nomeAtributo:[...dataForm.nomeAtributo, dataForm.nomeAtributoValue]});
    }

    const addAtributo = (e) =>
    {
        e.preventDefault();
    }

    // console.log(caracteristicas)

    return (
        <div className={style.container}>
            <h1>Criar produto</h1>
            <div className={style.form}>
                <form action="#">
                    <div className={style.productRegister}>
                        <div>
                            <label htmlFor="">Nome do produto:</label>
                            <input value={dataForm.nomeProduto} onChange={(e) => setDataForm({ ...dataForm, nomeProduto: e.target.value })} type="text" required />
                        </div>

                        <div>
                            <label htmlFor="">Categoria:</label>
                            <select name="" id="" defaultValue={'DEFAULT'} onChange={(e) => setDataForm({ ...dataForm, categoria: e.target.value })} required>
                                <option value="DEFAULT" disabled>Selecione uma categoria</option>
                                {categorias.map(element => {
                                    return (
                                        <option key={element.id} value={element.id}>{element.descricaoCategoria}</option>
                                    )
                                })}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="">Endereço:</label>
                            <input type="text" value={dataForm.endereco} onChange={(e) => setDataForm({ ...dataForm, endereco: e.target.value })} />
                        </div>

                        <div>
                            <label htmlFor="">Cidade:</label>
                            <select name="" id="" defaultValue={'DEFAULT'} onChange={(e) => setDataForm({ ...dataForm, cidade: e.target.value })} required>
                                <option value="DEFAULT" disabled>Selecione uma cidade</option>
                                {cidades.map(element => {
                                    return (
                                        <option key={element.id} value={element.id}>{element.nomeCidade}</option>
                                    )
                                })}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="">Descrição:</label>
                            <textarea name="" id="" cols="30" rows="10" required placeholder='Escreva a descrição do produto' value={dataForm.descricao} onChange={(e) => setDataForm({ ...dataForm, descricao: e.target.value })}></textarea>
                        </div>
                    </div>

                    <div className={style.productRegister}>
                        <h1>Adicionar atributos</h1>
                        <div>
                            <label htmlFor="">Nome:</label>
                            <input type="text" value={dataForm.nomeAtributoValue} onChange={e => setDataForm({...dataForm, nomeAtributoValue: e.target.value})} />
                        </div>

                        <div>
                            <label htmlFor="">Icone:</label>
                            <div className={style.row}>
                                <select name="" id="" defaultValue={"DEFAULT"} onChange={e => setDataForm({...dataForm, iconeValue: e.target.value})}>
                                    <option value="DEFAULT" disabled>Selecione um icone</option>
                                    {caracteristicas.map(element =>
                                        {
                                            return(
                                                <option key={element.id} value={element.iconeCaracteristica}>{element.nomeCaracteristica}</option>
                                            );
                                        })}
                                </select>
                                <button className={style.buttonAdd} onClick={addIcone}>+</button>
                                <div>icones adicionados</div>
                            </div>
                        </div>
                    </div>

                    <div className={style.productRegister}>
                        <h1>Políticas do produto</h1>
                        <div>
                            <h2>Regras da casa</h2>
                            <label htmlFor="">Descrição:</label>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Digite uma descrição' value={dataForm.politicaRegrasCasa} onChange={(e) => setDataForm({ ...dataForm, politicaRegrasCasa: e.target.value })}></textarea>
                        </div>

                        <div>
                            <h2>Saúde e segurança</h2>
                            <label htmlFor="">Descrição:</label>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Digite uma descrição' value={dataForm.politicaSaudeSeguranca} onChange={(e) => setDataForm({ ...dataForm, politicaSaudeSeguranca: e.target.value })}></textarea>
                        </div>

                        <div>
                            <h2>Política de cancelamento</h2>
                            <label htmlFor="">Descrição:</label>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Digite uma descrição' value={dataForm.politicaCancelamento} onChange={(e) => setDataForm({ ...dataForm, politicaCancelamento: e.target.value })}></textarea>
                        </div>
                    </div>

                    <div className={style.productRegister}>
                        <h1>Carregar Imagens</h1>
                        <div className={style.row}>
                            <input type="text" placeholder='Insira https://' value={dataForm.imagemValue} onChange={e => setDataForm({...dataForm, imagemValue: e.target.value})}/>
                            <button className={style.buttonAdd} onClick={addImage}>+</button>
                        </div>
                    </div>

                    <button onClick={handlerSubmit} className={style.buttonCriar} type='submit'>Criar</button>
                </form>
            </div>
        </div>
    )
}