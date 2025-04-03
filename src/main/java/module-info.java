module ru.school.schoolbrowser {
    requires javafx.fxml;
    requires javafx.controls;
    requires javafx.graphics;
    requires javafx.web;

    opens ru.school.schoolbrowser to javafx.fxml;
    exports ru.school.schoolbrowser;
}