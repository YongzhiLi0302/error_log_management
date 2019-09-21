package Activcarts.ErrorAndLogManagement;

/**
 * This class defines an ErrorLog object. 
 * Includes getters and setters for all attributes.
 */
public class ErrorLog {
    private Long id;
    private String description;
    private int flow;
    private String errorType;
    private String emergency;

    public ErrorLog() {}

    public ErrorLog (long id, String description, int flow, String errorType, String emergency) {
        super();
        this.id = id;
        this.description = description;
        this.flow = flow;
        this.errorType = errorType;
        this.emergency = emergency;
    }

    public Long getId () {
        return this.id;
    }

    public void setId (long id) {
        this.id = id;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription (String description) {
        this.description = description;
    }

    public int getFlow () {
        return this.flow;
    }

    public void setFlow (int flow) {
        this.flow = flow;
    }

    public String getErrorType () {
        return this.errorType;
    }

    public void setErrorType (String errorType) {
        this.errorType = errorType;
    }

    public String getEmergency () {
        return this.emergency;
    }

    public void setEmergency (String emergency) {
        this.emergency = emergency;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((description == null) ? 0 : description.hashCode());
        result = prime * result + flow;
        result = prime * result + ((emergency == null) ? 0 : emergency.hashCode());
        result = prime * result + ((errorType == null) ? 0 : errorType.hashCode());
        return result;
  }

    @Override
    public boolean equals (Object obj) {
        if (obj instanceof ErrorLog) {
            ErrorLog other = (ErrorLog) obj;
            return this.id == other.id && this.description.equals(other.description) 
                && this.flow == other.flow && this.errorType.equals(other.errorType)
                && this.emergency.equals(other.emergency);
        } else {
            return false;
        }
    }
}