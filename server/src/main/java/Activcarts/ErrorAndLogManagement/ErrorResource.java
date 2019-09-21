package Activcarts.ErrorAndLogManagement;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class ErrorResource {

  @Autowired
  private ErrorsHardCodedService errorManagementService;

  @GetMapping("/log/errors")
  public List<ErrorLog> getAllErrors() {
    return errorManagementService.findAll();
  }

  @GetMapping("/log/errors/totalCount")
  public long getTotalErrorsCount() {
    return ErrorsHardCodedService.getIdCounter();
  }
}