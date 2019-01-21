package Area;

public class HitChecker {

    public HitChecker() {
    }

    public HitData checkHit(InputData inputData) {
        long currentTime = System.nanoTime();
        boolean result;

        double x = inputData.getX();
        double y = inputData.getY();
        double r = inputData.getR();

        if (x > 0) {
            if (y > 0) {
                result = false;
            }
            else {
                result = x * x + y * y <= r * r;
            }
        } else {
            if (y > 0) {
                result = y <= x + r;
            } else {
                result = x >= -r / 2 && y >= -r;
            }
        }
        return new HitData(x, y, r, (System.nanoTime() - currentTime) / 1000000000d, System.currentTimeMillis(), result);
    }
}
