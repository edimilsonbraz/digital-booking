package com.example.ProjetoIntegradorI.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor

@Entity
@Table(name = "Imagens")

public class ImagensModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    /// Relacionamento ManyToOne com Produtos
    @ManyToOne
    @JoinColumn(name="produtos_id", nullable = false)
    private ProdutosModel produtos;

    private String tituloImagem;
    private String urlImagem;

    public ImagensModel(String tituloImagem, String urlImagem) {
        this.tituloImagem = tituloImagem;
        this.urlImagem = urlImagem;
    }

}
