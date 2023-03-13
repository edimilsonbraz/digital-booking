package com.example.ProjetoIntegradorI.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor

@Entity
@Table(name = "Caracteristicas")

public class CaracteristicasModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    /// Relacionamento Many to Many com Produtos;
    @ManyToMany(mappedBy = "produtosCaracteristica", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<ProdutosModel> caracteristicasCaracteristica = new HashSet<>();


    private String nomeCaracteristica;
    private String iconeCaracteristica;

    public CaracteristicasModel(String nomeCaracteristica, String iconeCaracteristica) {
        this.nomeCaracteristica = nomeCaracteristica;
        this.iconeCaracteristica = iconeCaracteristica;
    }
}
