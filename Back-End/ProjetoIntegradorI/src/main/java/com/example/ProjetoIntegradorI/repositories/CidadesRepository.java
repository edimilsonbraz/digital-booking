package com.example.ProjetoIntegradorI.repositories;

import com.example.ProjetoIntegradorI.models.CidadesModel;
import com.example.ProjetoIntegradorI.models.ProdutosModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CidadesRepository extends JpaRepository<CidadesModel, Long> {

}
