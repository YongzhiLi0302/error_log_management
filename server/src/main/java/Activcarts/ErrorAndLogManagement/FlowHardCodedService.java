package Activcarts.ErrorAndLogManagement;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class FlowHardCodedService {
    private static List<Flow> flows = new ArrayList<>();
    private static int flowCount = 0;

    static {
        flowCount++;
        flows.add(new Flow(flowCount, isFailed(flowCount) ? "KO" : "OK", 12345, "info1", "info2"));
        flowCount++;
        flows.add(new Flow(flowCount, isFailed(flowCount) ? "KO" : "OK", 10000, "info1", "info2"));
        flowCount++;
        flows.add(new Flow(flowCount, isFailed(flowCount) ? "KO" : "OK", 10000, "info1", "info2"));
    }

    public static List<Flow> getAllFlows() {
        return flows;
    }

    public static boolean isFailed(int id) {
        for (ErrorLog error: ErrorsHardCodedService.findAll()) {
            if (error.getFlow() == id) {
                return true;
            }
        }
        return false;
    }

    public static int getTotalItems() {
        int total = 0;
        for(Flow flow: flows) {
            total += flow.getNumberOfItems();
        }
        return total;
    }

    public static int getFailedProcess() {
        int total = 0;
        for(Flow flow: flows) {
            if (flow.getStatus().equals("KO")){
                total++;
            }
        }
        return total;
    }

    public static int getActiveProcess() {
        return flowCount - getFailedProcess();
    }
}