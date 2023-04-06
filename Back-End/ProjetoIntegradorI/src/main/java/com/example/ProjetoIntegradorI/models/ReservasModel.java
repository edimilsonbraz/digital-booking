package com.example.ProjetoIntegradorI.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name = "Reservas")
public class ReservasModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private ProdutosModel produtos;

    @ManyToOne
    private UsuarioModel usuario;

    private LocalDateTime horaInicioReserva;

    private LocalDate dataCheckIn;

    private LocalDate dataCheckOut;

}
