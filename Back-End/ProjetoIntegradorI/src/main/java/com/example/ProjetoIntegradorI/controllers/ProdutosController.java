package com.example.ProjetoIntegradorI.controllers;


import com.example.ProjetoIntegradorI.exceptions.BadRequestException;
import com.example.ProjetoIntegradorI.exceptions.ResourceNotFoundException;
import com.example.ProjetoIntegradorI.models.*;
import com.example.ProjetoIntegradorI.repositories.CategoriaRepository;
import com.example.ProjetoIntegradorI.repositories.CidadesRepository;
import com.example.ProjetoIntegradorI.services.IBookingService;
import com.example.ProjetoIntegradorI.services.impl.CategoriaServiceImpl;
import com.example.ProjetoIntegradorI.services.impl.CidadesServiceImpl;
import com.example.ProjetoIntegradorI.services.impl.ProdutosServiceImpl;
import com.example.ProjetoIntegradorI.services.impl.UsuarioServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@RestController
public class ProdutosController {

    private ProdutosServiceImpl produtosService;
    private CategoriaServiceImpl categoriaService;
    private CidadesServiceImpl cidadesService;

    @Autowired
    public ProdutosController(ProdutosServiceImpl produtosService, CategoriaServiceImpl categoriaService, CidadesServiceImpl cidadesService) {
        this.produtosService = produtosService;
        this.categoriaService = categoriaService;
        this.cidadesService = cidadesService;
    }


    /// POST
    @PostMapping("/produtos/salvar")
    public ResponseEntity<ProdutosModel> salvarProduto(@RequestBody ProdutosModel produtosModel) throws BadRequestException {
        try {
            return ResponseEntity.ok(produtosService.salvar(produtosModel));
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    // PUT OU UPDATE
    @PutMapping("/produtos/alterar")
    public ResponseEntity alterarProduto(@RequestBody ProdutosModel produtosModel) throws SQLException {
        return ResponseEntity.ok(produtosService.alterar(produtosModel));
    }

    // GET
    @RequestMapping(value = "/produtos", method = RequestMethod.GET, produces = "application/json")
    public List<ProdutosModel> buscarTodos() throws SQLException {
        return produtosService.buscarTodos();
    }


    // GET PRODUTOS BY CATEGORIA
    @GetMapping("/produtoscategoria/{id}")
    public ResponseEntity<List<ProdutosModel>> findByCategoria(@PathVariable Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok(produtosService.findByCategoria(id));
    }

    // GET PRODUTOS BY CIDADES
    @GetMapping("/produtoscidades/{id}")
    public List<ProdutosModel> findByCidades(@PathVariable Long id) throws ResourceNotFoundException {
        return produtosService.findByCidades(id);
    }

    // GET BY ID
    @GetMapping("/produtos/{id}")
    public ResponseEntity<Optional<ProdutosModel>> buscarPorId(@PathVariable Long id) throws ResourceNotFoundException {
        try {
            Optional<ProdutosModel> produtosModel = produtosService.buscarPorId(id);
            if (produtosModel != null && produtosModel.isPresent()) {
                return ResponseEntity.ok(produtosModel);
            }
            throw new ResourceNotFoundException("Não foi encontrado o produto " + id);
        } catch (SQLException e) {
            throw new ResourceNotFoundException("Erro ao buscar o produto " + id);
        }
    }

    //DELETE
    @DeleteMapping("/produtos/delete/{id}")
    public ResponseEntity excluirProduto(@PathVariable Long id) throws ResourceNotFoundException, SQLException {
        boolean excluiu = produtosService.excluir(id);
        if (excluiu) {
            return ResponseEntity.ok("produto deletado com sucesso!");
        }
        throw new ResourceNotFoundException("Não foi encontrada o produto com o id " + id);
    }
}
