package com.example.ProjetoIntegradorI.repositories;

import com.example.ProjetoIntegradorI.models.ProdutosModel;
import com.example.ProjetoIntegradorI.models.ReservasModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservasRepository extends JpaRepository<ReservasModel, Long> {

}
