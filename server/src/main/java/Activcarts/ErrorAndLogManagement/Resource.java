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
public class Resource {

  // @Autowired
  // private ErrorsHardCodedService errorManagementService;

  @GetMapping("/log/errors")
  public List<ErrorLog> getAllErrors() {
    return ErrorsHardCodedService.findAll();
  }

  @GetMapping("/log/errors/totalCount")
  public long getTotalErrorsCount() {
    return ErrorsHardCodedService.getIdCounter();
  }

  @GetMapping("/dashboard/flows")
  public List<Flow> getAllProcesses() {
    return FlowHardCodedService.getAllFlows();
  }

  @GetMapping("/dashboard/flows/active")
  public int getActiveProcesses() {
    return FlowHardCodedService.getActiveProcess();
  }

  @GetMapping("/dashboard/flows/failed")
  public int getFailedProcesses() {
    return FlowHardCodedService.getFailedProcess();
  }

  @GetMapping("/dashboard/flows/totalItems")
  public int getTotalItems() {
    return FlowHardCodedService.getTotalItems();
  }
}