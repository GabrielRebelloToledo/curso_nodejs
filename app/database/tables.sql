create table noticias (
    id_noticia INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(400) NOT NULL,
    noticia TEXT NOT NULL,
    resumo VARCHAR(100) NOT NULL,
    autor VARCHAR(300) NOT NULL,
    data_noticia DATE NOT NULL,
    data_insercao TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
)