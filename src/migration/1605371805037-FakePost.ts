import {MigrationInterface, QueryRunner} from "typeorm";

export class FakePost1605371805037 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            insert into post (title, text, "creatorId") values ('Chasing Christmas', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

            Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
            
            Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1);
            insert into post (title, text, "creatorId") values ('Mondo Trasho', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
            
            Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
            
            Fusce consequat. Nulla nisl. Nunc nisl.', 1);
            insert into post (title, text, "creatorId") values ('Big Brown Eyes', 'Fusce consequat. Nulla nisl. Nunc nisl.', 1);
            insert into post (title, text, "creatorId") values ('Man Who Loved Cat Dancing, The', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            
            Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
            
            Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1);
            insert into post (title, text, "creatorId") values ('Private Resort', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
            
            Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 1);
            insert into post (title, text, "creatorId") values ('Psycho III', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1);
            insert into post (title, text, "creatorId") values ('Hangover Square', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
            
            Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1);
            insert into post (title, text, "creatorId") values ('Bitter Feast', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 1);
            insert into post (title, text, "creatorId") values ('Favorite Deadly Sins', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
            
            Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1);
            insert into post (title, text, "creatorId") values ('Persuasion', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1);
            insert into post (title, text, "creatorId") values ('Death and Cremation', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
            
            Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1);
            insert into post (title, text, "creatorId") values ('Thelma & Louise', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
            
            Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1);
            insert into post (title, text, "creatorId") values ('Kingdom II, The (Riget II)', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
            
            In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1);
            insert into post (title, text, "creatorId") values ('Business, The', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
            
            Phasellus in felis. Donec semper sapien a libero. Nam dui.
            
            Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1);
            insert into post (title, text, "creatorId") values ('Terrorist, The (a.k.a. Malli) (Theeviravaathi)', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
            
            Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
            
            Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1);
            insert into post (title, text, "creatorId") values ('Haunted World of Edward D. Wood Jr., The', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
            
            Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1);
            insert into post (title, text, "creatorId") values ('Crisis (Kris)', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1);
            insert into post (title, text, "creatorId") values ('What Women Want', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.
            
            Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
            
            Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1);
            insert into post (title, text, "creatorId") values ('Morgan Pålsson - världsreporter', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1);
            insert into post (title, text, "creatorId") values ('Rich and Famous (Gong woo ching)', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.
            
            Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
            
            Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1);
            insert into post (title, text, "creatorId") values ('SOS - en segelsällskapsresa', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
            
            Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1);
            insert into post (title, text, "creatorId") values ('Invitation to a Gunfighter', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
            
            Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1);
            insert into post (title, text, "creatorId") values ('Control', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1);
            insert into post (title, text, "creatorId") values ('Echelon Conspiracy', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
            
            Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1);
            insert into post (title, text, "creatorId") values ('Hold That Ghost', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.
            
            Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
            
            Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 1);
            insert into post (title, text, "creatorId") values ('Thomas Pynchon: A Journey into the Mind of P.', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 1);
            insert into post (title, text, "creatorId") values ('Raw Deal', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
            
            Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1);
            insert into post (title, text, "creatorId") values ('Whom the Gods Wish to Destroy (Nibelungen, Teil 1: Siegfried, Die)', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
            
            Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
            
            In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1);
            insert into post (title, text, "creatorId") values ('That Guy... Who Was in That Thing', 'Fusce consequat. Nulla nisl. Nunc nisl.
            
            Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1);
            insert into post (title, text, "creatorId") values ('Cuban Fury', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
            
            Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1);
            insert into post (title, text, "creatorId") values ('Pharaoh''s Army', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1);
            insert into post (title, text, "creatorId") values ('Bridge of Dragons', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
            
            Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1);
            insert into post (title, text, "creatorId") values ('Inbetweeners Movie, The', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
            
            In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
            
            Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1);
            insert into post (title, text, "creatorId") values ('Hold That Ghost', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
            
            Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1);
            insert into post (title, text, "creatorId") values ('Don''t Look Now', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
            
            In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1);
            insert into post (title, text, "creatorId") values ('See Here, Private Hargrove', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1);
            insert into post (title, text, "creatorId") values ('Fresh Bait (L''appât) ', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.
            
            Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1);
            insert into post (title, text, "creatorId") values ('20 Million Miles to Earth', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
            
            Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1);
            insert into post (title, text, "creatorId") values ('Legend of Suram Fortress, The (Ambavi Suramis tsikhitsa) ', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1);
            insert into post (title, text, "creatorId") values ('Monday', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
            
            Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1);
            insert into post (title, text, "creatorId") values ('Wild Heritage', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
            
            Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
            
            In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1);
            insert into post (title, text, "creatorId") values ('Pretty Sweet', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
            
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 1);
            insert into post (title, text, "creatorId") values ('Unfaithful Wife, The (Femme infidèle, La)', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
            
            Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1);
            insert into post (title, text, "creatorId") values ('1612: Khroniki smutnogo vremeni', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
            
            Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1);
            insert into post (title, text, "creatorId") values ('Holiday Engagement', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
            
            Phasellus in felis. Donec semper sapien a libero. Nam dui.
            
            Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1);
            insert into post (title, text, "creatorId") values ('G.O.R.A.', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
            
            Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1);
            insert into post (title, text, "creatorId") values ('Showrunners: The Art of Running a TV Show', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
            
            Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1);
            insert into post (title, text, "creatorId") values ('Millie', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
            
            In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1);
            insert into post (title, text, "creatorId") values ('13 Frightened Girls! (Candy Web, The)', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.
            
            Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
            
            Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1);
            insert into post (title, text, "creatorId") values ('Pillow Talk', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            
            Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1);
            insert into post (title, text, "creatorId") values ('White Palms (Fehér tenyér)', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1);
            insert into post (title, text, "creatorId") values ('I Thank a Fool', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
            
            Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
            
            Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1);
            insert into post (title, text, "creatorId") values ('Temple Grandin', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
            
            Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
            
            Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1);
            insert into post (title, text, "creatorId") values ('Colors of the Mountain, The (Los colores de la montaña)', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
            
            Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1);
            insert into post (title, text, "creatorId") values ('Sweeney Todd: The Demon Barber of Fleet Street', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
            
            Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.
            
            Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 1);
            insert into post (title, text, "creatorId") values ('The Odyssey', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1);
            insert into post (title, text, "creatorId") values ('Conversations with My Gardener (Dialogue avec mon jardinier)', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
            
            Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
            
            Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1);
            insert into post (title, text, "creatorId") values ('Last Lions, The', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1);
            insert into post (title, text, "creatorId") values ('Escape', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
            
            Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1);
            insert into post (title, text, "creatorId") values ('Manual of Love 2 (Manuale d''amore (capitoli successivi))', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.
            
            Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1);
            insert into post (title, text, "creatorId") values ('Other Woman, The', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
            
            Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1);
            insert into post (title, text, "creatorId") values ('Singles', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
            
            Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1);
            insert into post (title, text, "creatorId") values ('Skinwalkers', 'In congue. Etiam justo. Etiam pretium iaculis justo.
            
            In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
            
            Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1);
            insert into post (title, text, "creatorId") values ('Working Class Goes to Heaven, The (a.k.a. Lulu the Tool) (La classe operaia va in paradiso)', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
            
            Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 1);
            insert into post (title, text, "creatorId") values ('Dames du Bois de Boulogne, Les (Ladies of the Bois de Boulogne, The) (Ladies of the Park)', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
            
            Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1);
            insert into post (title, text, "creatorId") values ('Arena, The (a.k.a. Naked Warriors)', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1);
            insert into post (title, text, "creatorId") values ('Fortune Cookie, The', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
            
            Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
            
            Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1);
            insert into post (title, text, "creatorId") values ('Outsider', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            
            Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1);
            insert into post (title, text, "creatorId") values ('Apparition, The', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
            
            Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1);
            insert into post (title, text, "creatorId") values ('Monitor, The (Babycall)', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
            
            Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
            
            Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1);
            insert into post (title, text, "creatorId") values ('Rollo and the Woods Sprite (Rölli ja metsänhenki)', 'Fusce consequat. Nulla nisl. Nunc nisl.
            
            Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1);
            insert into post (title, text, "creatorId") values ('52 Pick-Up', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1);
            insert into post (title, text, "creatorId") values ('Amadeus', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
            
            Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
            
            Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1);
            insert into post (title, text, "creatorId") values ('Gandhi', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1);
            insert into post (title, text, "creatorId") values ('Chopping Mall (a.k.a. Killbots)', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
            
            In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
            
            Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1);
            insert into post (title, text, "creatorId") values ('My Wife, A Body to Love', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
            
            Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1);
            insert into post (title, text, "creatorId") values ('Hot Tub Time Machine', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1);
            insert into post (title, text, "creatorId") values ('Disappearance of Alice Creed, The', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.
            
            Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 1);
            insert into post (title, text, "creatorId") values ('Experience Preferred... But Not Essential', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.
            
            Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1);
            insert into post (title, text, "creatorId") values ('Guns of Fort Petticoat, The', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
            
            Fusce consequat. Nulla nisl. Nunc nisl.', 1);
            insert into post (title, text, "creatorId") values ('Any Number Can Win (Mélodie en sous-sol )', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1);
            insert into post (title, text, "creatorId") values ('Direct Action', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
            
            Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1);
            insert into post (title, text, "creatorId") values ('Somewhere Under the Broad Sky', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1);
            insert into post (title, text, "creatorId") values ('Joyriders, The', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
            
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            
            Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1);
            insert into post (title, text, "creatorId") values ('Ace of Hearts, The', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1);
            insert into post (title, text, "creatorId") values ('Circle of Eight', 'Fusce consequat. Nulla nisl. Nunc nisl.
            
            Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1);
            insert into post (title, text, "creatorId") values ('Meltdown (Shu dan long wei)', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.
            
            Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1);
            insert into post (title, text, "creatorId") values ('Paid in Full', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
            
            Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
            
            Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1);
            insert into post (title, text, "creatorId") values ('Firm, The', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
            
            Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
            
            Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1);
            insert into post (title, text, "creatorId") values ('Executive Protection (Livvakterna)', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
            
            Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
            
            Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1);
            insert into post (title, text, "creatorId") values ('Zeder', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
            
            Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1);
            insert into post (title, text, "creatorId") values ('Three Way', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
            
            Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 1);
            insert into post (title, text, "creatorId") values ('Marion Bridge', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
            
            Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 1);
            insert into post (title, text, "creatorId") values ('Dorian Gray', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
            
            Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
            
            Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1);
            insert into post (title, text, "creatorId") values ('The Beast of the City', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1);
            insert into post (title, text, "creatorId") values ('Lady on a Train', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
            
            Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.
            
            Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 1);
            insert into post (title, text, "creatorId") values ('Scarface', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1);
            insert into post (title, text, "creatorId") values ('Man Who Knew Too Little, The', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            
            Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
            
            Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1);
            insert into post (title, text, "creatorId") values ('Poto and Cabengo', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
            
            Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1);
            insert into post (title, text, "creatorId") values ('His Secret Life (a.k.a. Ignorant Fairies, The) (Fate ignoranti, Le)', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 1);
            
        `);
    }

    public async down(_: QueryRunner): Promise<void> {
    }

}
