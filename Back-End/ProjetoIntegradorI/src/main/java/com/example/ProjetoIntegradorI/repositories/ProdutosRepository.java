package com.example.ProjetoIntegradorI.repositories;

import com.example.ProjetoIntegradorI.models.CategoriaModel;
import com.example.ProjetoIntegradorI.models.CidadesModel;
import com.example.ProjetoIntegradorI.models.ProdutosModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProdutosRepository extends JpaRepository<ProdutosModel, Long> {

//    List<ProdutosModel> findByCategoria_Id(Long id);
//    List<ProdutosModel> findByCidades_Id(Long id);
}
