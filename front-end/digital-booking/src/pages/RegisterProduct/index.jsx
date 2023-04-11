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

    useEffect(() => {
        getCidades();
        getCategorias();
    }, []);

    return (
        <div className={style.container}>
            <h1>Criar produto</h1>
            <div className={style.form}>
                <form action="#">
                    <div className={style.productRegister}>
                        <div>
                            <label htmlFor="">Nome do produto:</label>
                            <input type="text" required />
                        </div>

                        <div>
                            <label htmlFor="">Categoria:</label>
                            <select name="" id="" defaultValue={'DEFAULT'} required>
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
                            <input type="text" />
                        </div>

                        <div>
                            <label htmlFor="">Cidade:</label>
                            <select name="" id="" defaultValue={'DEFAULT'} required>
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
                            <textarea name="" id="" cols="30" rows="10" required placeholder='Escreva a descrição do produto'></textarea>
                        </div>
                    </div>

                    <div className={style.productRegister}>
                        <h1>Adicionar atributos</h1>
                        <div>
                            <label htmlFor="">Nome:</label>
                            <input type="text" />
                        </div>

                        <div>
                            <label htmlFor="">Icone:</label>
                            <div className={style.row}>
                                <input type="text" />
                                <button className={style.buttonAdd}>+</button>
                            </div>
                        </div>
                    </div>

                    <div className={style.productRegister}>
                        <h1>Políticas do produto</h1>
                        <div>
                            <h2>Regras da casa</h2>
                            <label htmlFor="">Descrição:</label>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Digite uma descrição'></textarea>
                        </div>

                        <div>
                            <h2>Saúde e segurança</h2>
                            <label htmlFor="">Descrição:</label>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Digite uma descrição'></textarea>
                        </div>

                        <div>
                            <h2>Política de cancelamento</h2>
                            <label htmlFor="">Descrição:</label>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Digite uma descrição'></textarea>
                        </div>
                    </div>

                    <div className={style.productRegister}>
                        <h1>Carregar Imagens</h1>
                        <div className={style.row}>
                            <input type="text" placeholder='Insira https://' />
                            <button className={style.buttonAdd}>+</button>
                        </div>
                    </div>

                    <button type='submit'>Criar</button>
                </form>
            </div>
        </div>
    )
}