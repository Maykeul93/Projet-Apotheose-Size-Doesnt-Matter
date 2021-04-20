-- Deploy aposize:05-insert-data to pg

BEGIN;

INSERT INTO question (content, answer) VALUES
('Combien faut-il d''humains allongés pour réussir à faire la circonférence de la terre ?','7 495 294'),
('Combien faut-il de burgers empilés pour avoir la taille de la tour Eiffel ?','3000'),
('Combien faut-il de burger pour peser aussi lourd que le Titanic ?','153 852 941'),
('Combien faut-il de cure-dents empilés pour faire la taille de l''homme le plus grand du monde ? ','53'),
('Combien faudrait-il de feuilles de papier  pour peser aussi lourd que l''homme le plus lourd du monde ? ','127 000'),
('Combien faut-il de burgers empilés pour avoir la taille du Burj Khalifa ? ','8 280'),
('Combien faut-il de burgers empilés pour avoir la taille du mont Everest ? ','88 490'),
('Combien faut-il de burgers empilés pour avoir la taille du Mont-Blanc ? ','48 090'),
('Combien faut-il de burgers empilés pour avoir la taille de l''homme le plus grand du monde ? ','28'),
('Combien faut-il de burgers empilés pour avoir la taille de l''Empire State Bulding ? ','3810'),
('Combien faut-il de Double Steakhouse de chez BurgerKing pour peser aussi lourd que la Terre?','16 361 643 835 616 438 356 164 384'),
('Combien de mètres faut-il parcourir au Pérou pour tourner d''un angle de un degré à la surface de la Terre?','110 598'),
('Combien de mètres faut-il parcourir en Laponie pour tourner d''un angle de un degré à la surface de la Terre?','111 947'),
('Combien de jours faudrait-il pour se rendre du sommet du Mont Everest au centre de la Terre à la vitesse constante de 80km/h?','3'),
('Combien de kilomètres de différence y a-t-il entre la longueur du Nil et la distance centre de la Terre/Sommet de l''Everest?','268'),
('Combien de couleurs secondaires les crevettes-mantes peuvent-elles percevoir?','4082'),
('Combien faut-il empiler de boîtes d''hamburgers de base pour atteindre le plafond de la galerie des glaces du Chateau de Versailles?','117'),
('Combien faut-il amasser de boîtes d''hamburgers de base pour recouvrir intégralement le domaine du Chateau de Versailles?','8 500 000 000'),
-- ('Quel pourcentage de la vitesse de la Lumière représente le record du monde du 100m du Usain Bolt?','0.000003'),
('Combien de pays de la superficie du Liechtenstein la Russie peut-elle contenir?','107 062'),
('Combien faut-il de fois cumuler le record de saut en longeur pour arriver à dépasser la longeur de la voiture la plus longue du monde ? ','3'),
('Combien faudrait-il manger de bannane pour arriver au même nombre de calories qu''un strongman ?','152'),
('Combien de couleur type le caméléon possède-t-il ?','4'),
('Combien de fois faudrait-il peser la plus grosse pépite d''or pour peser aussi loud que le cerceuil de Toutenkhamon ? ','1'),
('Quelle vitesse faudrait-il avoir en km/h pour devenir invisible à l''oeil nu ?','1260'),
('Combien faudrait-il de crocodile pour peser aussi lourd qu''un T rex ? ','12'),
('Combien de pièce de 50 centimes faut-il empilé pour arrivé à une taille humaine moyenne ?','85 000'),
('Combien de fois faudrait-il multiplier la population de Paris pour arriver à celle de la Chine ? ','641'),
('Combien de pas devrons-nous faire pour effectuer un Paris-Marseille ?','1 191 231'),
('Combien de fois faudrait-il faire le record de saut à la perche pour arriver à un total équivaut à la taille du Kilimandjaro ?','958'),
('Combien de fois faudrait-il empiler l''homme le plus petit du monde pour atteindre le sommet de la Statue de la Liberté?','163'),
('Combien de jours faudrait-il à un escargot pour faire le tour de la circonférence de la Terre?','463 831'),
('Combien de reines fourmi rousse de type Formica Rufa faudrait-il pour peser aussi lourd qu''une Twingo?','38 933 333'),
('Combien de stades de football américain faudrait-il pour arriver à une superficie équivalente à la plus grande superficie de l''empire Romain ?','920'),
('Combien de secondes de différences y aurait-il sur un 100m nage libre entre le recordman en titre et un espadon?','43'),
('Combien de feuilles A4 standards faudrait-il empiler pour atteindre la taille du Colosse de Rhodes?','320 000	');
 	

INSERT INTO tag (name) VALUES
('Astronomie'),
('Architecture'),
('Gastronomie'),
('Etres Vivants'),
('Zoologie'),
('Sport'),
('Géographie'),
('Archéologie'),
('Histoire');

INSERT INTO tag_categorize_question (tag_id, question_id) VALUES
('1','1'),
('2','2'),
('3','3'),
('3','4'),
('4','5'),
('2','6'),
('2','7'),
('2','8'),
('4','9'),
('2','10'),
('1','11'),
('1','12'),
('1','13'),
('1','14'),
('1','15'),
('5','16'),
('2','17'),
('2','18'),
('6','19'),
('7','20'),
('6','21'),
('6','22'),
('5','23'),
('8','24'),
('6','25'),
('5','26'),
('4','27'),
('7','28'),
('7','29'),
('6','30'),
('2','31'),
('5','32'),
('5','33'),
('9','34'),
('5','35');
-- ('9','36');

INSERT INTO "user" (email, password, pseudo, avatar, role) VALUES
('arnaud@gmail.com', 'aranud', 'jcv', 'Briana', 'admin'),
('alexandre@gmail.com', 'bob', 'kiki', 'Toms', 'admin');

COMMIT;
