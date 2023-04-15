package com.example.ProjetoIntegradorI.services.impl;

import com.example.ProjetoIntegradorI.models.ProdutosModel;
import com.example.ProjetoIntegradorI.models.ReservasModel;
import com.example.ProjetoIntegradorI.repositories.ReservasRepository;
import com.example.ProjetoIntegradorI.services.IBookingService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Service
public class ReservasServiceImpl implements IBookingService<ReservasModel> {

    private final ReservasRepository reservasRepository;

    public ReservasServiceImpl(ReservasRepository reservasRepository) {
        this.reservasRepository = reservasRepository;
    }


    @Override
    public ReservasModel salvar(ReservasModel reservasModel) {
        if (reservasModel != null) {
            return reservasRepository.save(reservasModel);
        }
        return new ReservasModel();
    }

    @Override
    public String alterar(ReservasModel reservasModel) {
        if (reservasModel != null && reservasRepository.findById(reservasModel.getId()).isPresent()) {
            reservasRepository.saveAndFlush(reservasModel);
            return "Reserva alterada com sucesso!";
        }
        return "Não foi possível alterar a reserva.";
    }

    @Override
    public List<ReservasModel> buscarTodos() throws SQLException {
        return reservasRepository.findAll();
    }

    @Override
    public Optional<ReservasModel> buscarPorId(Long id) throws SQLException {
        return reservasRepository.findById(id);
    }

    @Override
    public boolean excluir(Long id) throws SQLException {
        if (reservasRepository.findById(id).isPresent()) {
            reservasRepository.deleteById(id);
            return true;
        }
        return false;
    }

//    public List<String> buscarDatasDisponiveis(LocalDate dataInicio, LocalDate dataFim) {
//
//        List<ReservasModel> reservas = reservasRepository.findAll();
//        Set<LocalDate> datasReservadas = new HashSet<>();
//        for (ReservasModel reservasModel : reservas) {
//            LocalDate checkInDate = reservasModel.getDataCheckIn();
//            LocalDate checkOutDate = reservasModel.getDataCheckOut();
//            while (!checkInDate.isAfter(checkOutDate)) {
//                datasReservadas.add(checkInDate);
//                checkInDate = checkInDate.plusDays(1);
//            }
//        }
//        List<String> datasDisponiveis = new ArrayList<>();
//        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
//        LocalDate dataAtual = dataInicio;
//        while (!dataAtual.isAfter(dataFim)) {
//            if (!datasReservadas.contains(dataAtual)) {
//                datasDisponiveis.add(dataAtual.format(formatter));
//            }
//            dataAtual = dataAtual.plusDays(1);
//        }
//        return datasDisponiveis;
//    }
}
