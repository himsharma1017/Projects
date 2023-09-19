
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.*;

public class quickBites {

    // Helper Class for File Data Retrieval
    static class GetFileData {

        private String fileName;

        public GetFileData(String fileName) {
            this.fileName = fileName;
        }

        public void displayCompleteData() {
            try {
                BufferedReader reader = new BufferedReader(new FileReader(fileName));
                String line;
                while ((line = reader.readLine()) != null) {
                    System.out.println(line);
                }
                reader.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        public String[][] getCompleteFileData() {
            List<String[]> data = new ArrayList<>();
            try {
                BufferedReader reader = new BufferedReader(new FileReader(fileName));
                String line;
                while ((line = reader.readLine()) != null) {
                    String[] row = line.split(",");
                    data.add(row);
                }
                reader.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
            return data.toArray(new String[0][0]);
        }

        public String[] searchDataByID(int id) {
            try {
                BufferedReader reader = new BufferedReader(new FileReader(fileName));
                String line;
                while ((line = reader.readLine()) != null) {
                    String[] row = line.split(",");
                    int recordID = Integer.parseInt(row[0]);
                    if (recordID == id) {
                        return row;
                    }
                }
                reader.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
            return null;
        }

        public int getLastID() {
            int lastID = -1;
            try {
                BufferedReader reader = new BufferedReader(new FileReader(fileName));
                String line;
                while ((line = reader.readLine()) != null) {
                    String[] row = line.split(",");
                    int recordID = Integer.parseInt(row[0]);
                    if (recordID > lastID) {
                        lastID = recordID;
                    }
                }
                reader.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
            return lastID;
        }
    }

    // Representation of Menu Items
    static class MenuItem {

        private int menuID;
        private String name;
        private double price;

        public MenuItem(int menuID, String name, double price) {
            this.menuID = menuID;
            this.name = name;
            this.price = price;
        }

        public int getMenuID() {
            return menuID;
        }

        public String getName() {
            return name;
        }

        public double getPrice() {
            return price;
        }
    }

    // Representation of Customer Orders
    static class Order {

        private int orderID;
        private List<MenuItem> items;
        private List<Integer> quantities;
        private double totalBillAmount;
        private Date date;
        private String status;

        public Order(int orderID, List<MenuItem> items, List<Integer> quantities, double totalBillAmount, String status) {
            this.orderID = orderID;
            this.items = items;
            this.quantities = quantities;
            this.totalBillAmount = totalBillAmount;
            this.date = new Date();
            this.status = status;
        }

        public int getOrderID() {
            return orderID;
        }

        public List<MenuItem> getItems() {
            return items;
        }

        public List<Integer> getQuantities() {
            return quantities;
        }

        public double getTotalBillAmount() {
            return totalBillAmount;
        }

        public Date getDate() {
            return date;
        }

        public String getStatus() {
            return status;
        }
    }

    // Representation of Daily Collection Report
    static class CollectionReport {

        private Date date;
        private double totalCollection;

        public CollectionReport(Date date, double totalCollection) {
            this.date = date;
            this.totalCollection = totalCollection;
        }

        public void generateReport(List<Order> orders) {
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            System.out.println("Date: " + sdf.format(date));
            System.out.println("Total Collection: $" + totalCollection);
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Initialize menu data and order data
        GetFileData menuData = new GetFileData("menu.csv");
        GetFileData orderData = new GetFileData("orders.csv");

        // Placeholder data for menu items and order details
        List<MenuItem> menuItems = Arrays.asList(
                new MenuItem(1, "Burger", 5.99),
                new MenuItem(2, "Pizza", 8.99),
                new MenuItem(3, "Pasta", 6.99)
        );

        List<Integer> orderQuantities = Arrays.asList(2, 1, 3);

        List<Order> orders = Arrays.asList(
                new Order(1, menuItems, orderQuantities, 29.94, "Delivered"),
                new Order(2, menuItems, orderQuantities, 29.94, "Pending"),
                new Order(3, menuItems, orderQuantities, 29.94, "Cancelled")
        );

        // Display complete menu data
        menuData.displayCompleteData();

        // Get complete order data as 2D array
        String[][] orderDataArray = orderData.getCompleteFileData();
        System.out.println(Arrays.deepToString(orderDataArray));

        // Search for data by ID
        String[] orderRecord = orderData.searchDataByID(2);
        System.out.println(Arrays.toString(orderRecord));

        // Get the last ID
        int lastOrderID = orderData.getLastID();
        System.out.println("Last Order ID: " + lastOrderID);

        // Generate a collection report for today
        Calendar calendar = Calendar.getInstance();
        Date today = calendar.getTime();
        double totalCollection = orders.stream().mapToDouble(Order::getTotalBillAmount).sum();
        CollectionReport report = new CollectionReport(today, totalCollection);
        report.generateReport(orders);
    }
}
