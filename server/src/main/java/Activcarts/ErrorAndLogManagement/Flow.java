package Activcarts.ErrorAndLogManagement;


public class Flow {
    private int processId;
    private String status;
    private int numberOfItems;
    private String information1;
    private String information2;

    public Flow () {}

    public Flow (int processId, String status, int numberOfItems, String information1, String information2) {
        this.processId = processId;
        this.status = status;
        this.numberOfItems = numberOfItems;
        this.information1 = information1;
        this.information2 = information2;
    }

    /**
    * @return the status
    */
    public String getStatus() {
        return status;
    }

    /**
     * @return the information1
     */
    public String getInformation1() {
        return information1;
    }

    /**
     * @return the information2
     */
    public String getInformation2() {
        return information2;
    }

    /**
     * @return the processId
     */
    public int getProcessId() {
        return processId;
    }
    
    /**
     * @return the numberOfItems
     */
    public int getNumberOfItems() {
        return numberOfItems;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + processId;
        result = prime * result + ((status == null) ? 0 : status.hashCode());
        result = prime * result + numberOfItems;
        result = prime * result + ((information1 == null) ? 0 : information1.hashCode());
        result = prime * result + ((information2 == null) ? 0 : information2.hashCode());
        return result;
  }

    @Override
    public boolean equals (Object obj) {
        if (obj instanceof Flow) {
            Flow other = (Flow) obj;
            return this.processId == other.processId && this.status.equals(other.status) 
                && this.numberOfItems == other.numberOfItems && this.information1.equals(other.information1)
                && this.information2.equals(other.information2);
        } else {
            return false;
        }
    }
}