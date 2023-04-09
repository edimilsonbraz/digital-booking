package com.example.ProjetoIntegradorI.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.mapping.List;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor

@Entity
@Table(name = "Produtos")

public class ProdutosModel {

    /// Relacionamento ManyToMany de Produto com Caracteristicas
    @ManyToMany(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinTable(
            name = "Produtos_Caracteristicas",
            joinColumns = { @JoinColumn(name = "produtos_id", foreignKey = @ForeignKey (name = "fkproduto"))},
            inverseJoinColumns = { @JoinColumn(name = "caracteristicas_id") }
    )
    private Set<CaracteristicasModel> produtosCaracteristica = new HashSet<>();

    /// Relacionamento OneToMany com Imagens
    @OneToMany
    private Set<ImagensModel> imagens = new HashSet<>();

    /// Relacionamento ManyToOne com Categoria

    @ManyToOne
    private CategoriaModel categoria;


    /// Relacionamento ManyToOne produto x cidade
    @ManyToOne
    private CidadesModel cidades;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String nomeProduto;
    private String descricaoProduto;

    public ProdutosModel(Set<CaracteristicasModel> produtosCaracteristica, Set<ImagensModel> imagens, CategoriaModel categoria, CidadesModel cidades, Long id, String nomeProduto, String descricaoProduto) {
        this.produtosCaracteristica = produtosCaracteristica;
        this.imagens = imagens;
        this.categoria = categoria;
        this.cidades = cidades;
        this.id = id;
        this.nomeProduto = nomeProduto;
        this.descricaoProduto = descricaoProduto;
    }
}
