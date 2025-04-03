package ru.school.schoolbrowser;

import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;

import java.net.URL;
import java.util.ResourceBundle;

public class WebController implements Initializable {

    @FXML
    private WebView view;

    private WebEngine engine;

    @Override
    public void initialize(URL url, ResourceBundle resourceBundle) {
        engine = view.getEngine();
        loadPage();
    }

    private void loadPage() {
        engine.load("http://127.0.0.1:3000");
    }
}