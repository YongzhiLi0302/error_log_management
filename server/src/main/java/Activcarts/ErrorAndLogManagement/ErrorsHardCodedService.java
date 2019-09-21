package Activcarts.ErrorAndLogManagement;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ErrorsHardCodedService {

    // Store all displayed error logs
    private static List<ErrorLog> errors = new ArrayList<>();
    // Cound errors number and assign id number.
    private static long idCounter = 0;

    /**
     * Add hardcoded data.
     */
    static {
        errors.add(new ErrorLog(++idCounter, "A short Description", 1, "Type A", "Urgent"));
        errors.add(new ErrorLog(++idCounter, "A long long long long long long long description", 12, "Type B", "General"));
        errors.add(new ErrorLog(++idCounter, "A very very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very long long long long long long long description", 32, "Type C", "Priority"));
        errors.add(new ErrorLog(++idCounter, "A short Description", 5, "Type D", "Urgent"));
    }

    /**
     * 
     * @return number of errors in log
     */
    public static long getIdCounter() {
        return idCounter;
    }

    /**
     * Find all errors messages.
     * @return the list of all error messages.
     */
    public static List<ErrorLog> findAll() {
        return errors;
    }


//   public ErrorLog save(ErrorLog error) {
//     if (error.getId() == -1 || error.getId() == 0) {
//       error.setId(++idCounter);
//       errors.add(error);
//     } else {
//       deleteById(error.getId());
//       errors.add(error);
//     }
//     return error;
//   }

    /** 
     * Mark a specific error message as read.
     * @param id the id of the error to be marked as read.
     * @return true if the given error is successfully marked as read, false otherwise.
     */
    public boolean markAsRead(long id) {
        ErrorLog error = findById(id);
        if (error == null){
            return false;
        }
        return errors.remove(error);
    }

    /**
     * Search for a specific error message.
     * @param id the id of the error log to be searched
     * @return the ErrorLog object of the desired error message, 
     *            null if such message does not exist
     */
    public ErrorLog findById(long id) {
        for (ErrorLog error : errors) {
            if (error.getId() == id) {
                return error;
            }
        }
        return null;
    }
}