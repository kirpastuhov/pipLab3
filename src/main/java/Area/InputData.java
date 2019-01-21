package Area;

import lombok.Data;
import org.icefaces.ace.event.SlideEndEvent;


import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@ManagedBean(name = "InputBean")
@ViewScoped
public class InputData {
    private double x;
    private double y;
    private double r = 50;

    private static final Integer[] xValues = new Integer[] {-4, -3,-2, -1, 0, 1, 2, 3, 4};



    public InputData(double x, double y, double r) {
        this.x = x;
        this.y = y;
        this.r = r / 10;
    }

    public InputData() {
    }


    public double getX() {
        return x;
    }
    public void setX(double x) { this.x = x; }

    public double getY() {
        return y;
    }
    public void setY(double y) {
        this.y = y;
    }

    public double getR() {
        return r / 10;
    }
    public void setR(double r) {
        this.r = r;
    }

    public Integer[] getXValues() {
        return xValues;
    }

}
