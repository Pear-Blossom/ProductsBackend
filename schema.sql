CREATE TABLE products
(
 "id"            int NOT NULL,
 name          varchar(60) NOT NULL,
 slogan        varchar(100) NOT NULL,
 description   varchar(400) NOT NULL,
 category      varchar(50) NOT NULL,
 default_price varchar(10) NOT NULL,
 CONSTRAINT PK_products PRIMARY KEY ( "id" )
);

CREATE TABLE features
(
 "id"       int NOT NULL,
 product_id int NOT NULL,
 feature    varchar(50) NOT NULL,
 value      varchar(100) NOT NULL,
 CONSTRAINT PK_features PRIMARY KEY ( "id" ),
 CONSTRAINT FK_25 FOREIGN KEY ( product_id ) REFERENCES products ( "id" )
);

CREATE INDEX fkIdx_26 ON features
(
 product_id
);

CREATE TABLE styles
(
 "id"           int NOT NULL,
 product_id     int NOT NULL,
 name           varchar(70) NOT NULL,
 sale_price     varchar(10) NULL,
 original_price varchar(10) NOT NULL,
 default_style  varchar(1) NOT NULL,
 CONSTRAINT PK_styles PRIMARY KEY ( "id" ),
 CONSTRAINT FK_36 FOREIGN KEY ( product_id ) REFERENCES products ( "id" )
);

CREATE INDEX fkIdx_37 ON styles
(
 product_id
);

CREATE TABLE related
(
 "id"               int NOT NULL,
 current_product_id int NOT NULL,
 related_product_id int NOT NULL,
 CONSTRAINT PK_related PRIMARY KEY ( "id" ),
 CONSTRAINT FK_46 FOREIGN KEY ( current_product_id ) REFERENCES products ( "id" )
);

CREATE INDEX fkIdx_47 ON related
(
 current_product_id
);

CREATE TABLE skus
(
 "id"       int NOT NULL,
 style_id int NOT NULL,
 "size"     varchar(3) NOT NULL,
 quantity int NOT NULL,
 CONSTRAINT PK_skus PRIMARY KEY ( "id" ),
 CONSTRAINT FK_53 FOREIGN KEY ( style_id ) REFERENCES styles ( "id" )
);

CREATE INDEX fkIdx_54 ON skus
(
 style_id
);

CREATE TABLE photos
(
 "id"            int NOT NULL,
 style_id      int NOT NULL,
 url           varchar(200) NOT NULL,
 thumbnail_url varchar(200) NOT NULL,
 CONSTRAINT PK_photos PRIMARY KEY ( "id" ),
 CONSTRAINT FK_61 FOREIGN KEY ( style_id ) REFERENCES styles ( "id" )
);

CREATE INDEX fkIdx_62 ON photos
(
 style_id
);