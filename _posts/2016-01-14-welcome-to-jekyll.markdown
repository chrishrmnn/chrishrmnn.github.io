---
layout: post
title:  "Le fond et la forme"
date:   2016-01-14 21:01:38 +0100
categories: front-end
sitemap: true
excerpt: Il y a peu, je vous faisais part de mon envie d’écrire, j’ai donc depuis travaillé à la création ce blog afin de pouvoir partager quelques articles sur les sujets qui me tiennent à coeur. Pour ce premier article, j'aimerais partager avec vous l'expérience de la création de ce blog et vous expliquer la philosophie que j'ai décidé de suivre.
---

Il y a peu, je vous faisais part de mon [envie d'écrire][medium-ecrire], j'ai donc depuis travaillé à la création ce blog afin de pouvoir partager quelques articles sur les sujets qui me tiennent à coeur, à savoir tout ce qui touche au "front-end": du design à l'intégration en passant par l'expérience utilisateur mais je ne m'interdit pas de poster des articles plus généraliste.

Pour ce premier article, j'aimerais partager avec vous l'expérience de la création de ce blog et vous expliquer la philosophie que j'ai décidé de suivre. Je ne vais pas écrire d'article d'introduction, si vous souhaitez en savoir plus sur ce blog ou sur moi-même, je vous invite à consulter la page _A propos_.



## La forme

Dès que j'ai commencé à réfléchir à ce blog, j'ai très vite choisi de privilégier le contenu. Je voulais quelque chose d'agréable à lire et de lisible, peu importe le support sur lequel il est consulté. Malgré tout, je voulais quand même qu'on puisse m'identifier.

J'ai déjà une identité personnelle que j'ai créé il y a quelques années. Elle comprend un logo, des typos et des couleurs (que j'ai récemment rafraîchit, mais je vous avouerai que je ne suis pas totalement satisfait). Le choix a été fait d'utiliser ces élements comme base pour le blog.

Je ne suis passé par aucun logiciel de création graphique (Photoshop ou Sketch), la simplicité graphique du design m'a permis de travailler directement dans le navigateur. Un exercice intéressant.

### La typograhie

Les deux polices qui font partie de mon identité sont PT Sans et PT Serif, elles ont toutes les deux été créées par la fonderie [ParaType][paratype]. L'une est la variante avec empattements de la première, elles fonctionnent donc très bien ensemble.

Pour des questions de lisibilité mais également d'affinité, j'ai choisi d'utiliser la version avec empattements pour les textes courants. La version sans sérif est utilisée pour les titres et les informations secondaires.

#### Justification

Pour éviter de fatiguer l'oeil mais également pour améliorer le confort de lecture, il est important d'avoir des longueurs de lignes ni trop courte, ni trop longue. Il est conseillé d'avoir une justification entre 40 et 80 caractères. J'ai donc fait différents tests pour trouver l'harmonie entre la lisibilité et le "graphiquement joli".

L'intégration du site étant entièrement réalisée en unité relative (em), le zoom n'affecte pas la justification qui est conservée.


#### Rythme vertical

Avoir de belles polices qui vont de paire et une bonne justification ne fait pas tout. Ce qui fait la différence c'est le rythme vertical, en effet il va assurer une harmonie générale et par ce fait rendre la lecture plus agréable.

Je ne vais pas vous faire un cours sur le rythme vertical, il existe de très bonnes ressources sur le sujet, mais pour vous expliquer rapidement, il s'agit d'ajuster la taille de police, la hauteur de ligne et les marges afin de rester aligner sur une grille typographique définie et ne pas écrire entre les lignes.

C'est un exercice qui peut s'avérer complexe, surtout si comme moi vous n'aimez pas les maths. Bien heureusement il existe des outils qui vous permettent de calculer ce rythme. Je me suis servi de l'outil [Vertical Rhythm Tool][vrt-soqr] pour générer une base que j'ai ensuite adapté en fonction du design. Pour m'assurer que le rythme était toujours respecté, j'ai [affiché la grille typographique][vr-grid] grâce à une petite astuce découvert chez [Nicolas Hoffmann][nico3333].

Il reste cependant un point en suspens à ce sujet. Comment rétablir le rythme vertical après l'insertion d'un média (image, vidéo) ? Si vous avez la réponse ou des pistes, je suis preneur !


### Mode nuit

Pour rendre l'expérience de lecture encore plus agréable, j'ai également créé un mode nuit qui pourra être activé par l'utilisateur (en attendant un support correct de l'[API Ambient Light][ambient-light]) en cliquant sur la petite icône en bas à droite. Si l'environnement dans lequel l'utilisateur se trouve est faible en lumière, il sera plus agréable de lire sur un fond sombre.



## Le fond

Derrière la forme, se cache le fond. Dans cette partie, je vais dans un premier temps parler de l'intégration puis de Jekyll, le moteur qui me permet de générer les différentes pages et articles.

### Une intégration aux petits oignons 

L'intégration Web, c'est mon dada. J'en fait au quotidien depuis plusieurs années et depuis plusieurs mois, j'attache une importance particulière à la qualité Web. Cependant, c'est la première fois que je design directement dans le navigateur. Il m'arrive de décliner des designs existants mais c'est la première fois que je commence à zéro dans mon éditeur de texte !

J'ai l'habitude de toujours avoir une maquette, c'est assez perturbant de n'avoir aucun élement sur lequel se baser dans un moment d'hésitation. J'avais gribouillé une structure sur une feuille de papier, ça m'a servi pour la structure générale mais lorsqu'il s'agit de travailler sur les petits détails, le _wireframe_ n'a plus trop d'intérêt.

L'expérience a été vraiment intéressante, il y a des chances que je la renouvelle mais je pense qu'elle a ses limites. Par exemple, pour un site riche graphiquement, j'ai des doutes sur son efficacité. Cette méthode demande aussi plus de temps dans la phase d'intégration puisqu'il faut lui associer la phase de design, qui en temps normal est traitée en amont (mais toujours avec un intégrateur pas très loin évidemment).


#### <abbr title="Hypertext Markup Language">HTML</abbr> et sémantique

Comme a mon habitude, j'ai pris soin de ma structure <abbr title="Hypertext Markup Language">HTML</abbr> et sa sémantique. L'apport de la sémantique est souvent négligé mais elle a des apports sur des nombreux points, notamment sur l'accessibilité et le référencement. Pour apporter encore plus de sens au contenu, j'ai également utilisé les [Microdatas][microdata].


#### Accessibilité

Le Web est un endroit génial, pour que cet endroit profite à tout à chacun, j'essaye de rendre accessible le plus possible tout ce que je produit.

J'ai mis en place des liens d'évitement pour accéder directement au menu et au contenu. J'ai apporté un peu de sens à différents élements qui visuellement sont facilement compréhensible mais qui le sont moins lorsque l'utilisateur utilise un lecteur d'écran. Par exemple pour le temps de lecture, un élement <abbr title="Hypertext Markup Language">HTML</abbr> invisble à l'oeil mais qui sera lu par les lecteurs d'écrans précise qu'il s'agit du _temps de lecture estimé_, c'est déjà plus compréhensible qu'un simple _3 minutes_, non ?

Je ne suis pas un expert sur le sujet, il y a donc forcément des choses qui sont encore améliorables, je suis ouvert à vos propositions.

#### Un peu de style

Les styles ont été produit en passant par le pré-processeur <abbr title="Syntactically Awesome Style Sheets">SASS</abbr>. Je vous avouerais que j'ai vraiment du mal à m'en passer.

Comme je le disais plus haut, toute l'intégration a été réalisée en unité relative (em). Les avantages de cette technique sont nombreux, je vous renvoie à la [conférence de Nicolas Hoizey][conf-em] sur le sujet si vous souhaitez en savoir plus.

J'ai aussi commencé à suivre les recommandations du guide de style [Sass Guidelines][sass-guidelines] pour structurer mes fichiers, je vais appliquer les autres règles de ce guide dans un futur proche. J'applique déjà les recommandations de [CSS Guidelines][css-guidelines] à mes feuilles de style. Je vous encourage vraiment à prendre un peu de temps de votre temps pour lire et si possible appliquer ce que vous pourrez trouver dans ces deux guides. L'objectif est d'harmoniser l'écriture des CSS pour arrêter de s'arracher les cheveux lorsqu'on récupère le code d'un autre intégrateur / développeur.


### Le statique, c'est fantastique

Qui dit blog, dit très souvent WordPress. J'ai été tenté par cette solution au départ, mais je voulais quelque chose de léger et si possible sans base de données, je cherchais également à toucher à quelque chose de nouveau. Mes recherches m'ont orienté vers [Jekyll][jekyll]. 

Jekyll c'est un générateur de sites statiques, il est écrit en Ruby, embarque le moteur de templating [Liquid][liquid] (très proche de [Twig][twig]) et s'appuie sur [Markdown][markdown] pour la rédaction des contenus. Un autre avantage, c'est qu'il est possible de déployer son site via les [pages Github][github-pages], méthode que j'ai choisi. Le code source du blog est donc entièrement disponible sur mon compte Github.

Bien que relativement complet par défaut, Jekyll n'embarque pas autant de fonctionnalité qu'un WordPress, ça peut-être considéré comme un défaut mais j'y vois plutôt un avantage. Je l'ai donc étoffé de quelques petits artifices pour l'adapter à mes besoins. Je me suis rapidement rendu compte que les ressources disponibles n'étaient pas aussi nombreuses que pour WordPress, Drupal ou Symfony2 par exemple.

#### Performances

Même si le design est graphiquement léger, j'ai voulu optimiser les performances, notamment en agrégeant les ressources <abbr title="Cascading Style Sheets">CSS</abbr> et Javascript avant de les minifier. Pour ce faire, j'ai utilisé [Jekyll Assets][jekyll-assets], très simple d'utilisation une fois installé, il fait très bien son travail. 

Liquid a le défaut de générer des espaces et des sauts de ligne important, pour palier à ce problème, j'ai [compressé le HTML][compress-html] grâce à une petite astuce qui consiste à créer un template qui va supprimer tous les sauts de ligne et espaces inutiles.

Autre petite astuce vraiment intéressante concernant les performances, bien qu'elle ne dépende pas directement de Jekyll. Le site étant statique, la gestion des commentaires n'est donc pas possible sans passer par un service tiers. J'ai opté pour Disqus, très répandu, il gère ça très bien. Le problème de ces partis tiers c'est qu'il faut placer un morceau de script dans la page pour qu'ils puissent fonctionner, ce qui peut avoir un impact sur le temps de chargement de la page. Les commentaires n'étant pas quelque chose de critique, ils ne sont pas affiché ni chargé par défaut mais uniquement lorsque l'utilisateur exprime l'envie de laisser un commentaire en cliquant sur le bouton adéquat. Un petit appel en <abbr title="Asynchronous JavaScript and XML">AJAX</abbr> permet de charger le script nécessaire à l'affichage de la zone de commentaires.

Et enfin, les boutons de partage sur les réseaux sociaux n'utilisent pas de scripts tiers mais simplement une URL à laquelle il faut passer différents paramètres, on ne peut pas faire plus simple et c'est tout aussi efficace.

La dernière chose que je n'ai pas abordé dans cette partie concernant les performances, c'est les polices de caractères. Elles sont pour le moment chargées via Google Fonts, c'est temporaire je vous rassure. Le chargement des polices sur le Web est un sujet vraiment complexe, je vais prendre le temps de l'étudier et essayer de trouver la meilleure solution.

#### Mais aussi

Pour aider les moteurs de recherche à indexer les différents articles ainsi que les pages, j'ai mis en place un [plan du site au format XML][sitemap] via un simple template avec un peu de logique géré par Liquid.

Et enfin, dernière petite chose, l'ajout d'un [temps de lecture estimé][readtime] pour que le visiteur puisse en un coup d'oeil savoir si l'article sera long ou rapide à lire et ainsi décider si il a le temps de le lire immédiatement ou alors plus tard.



## Done is better than perfect

Pour terminer, j'aimerais vous parler de la philosophie que j'ai décidé de suivre. J'ai toujours eu le fâcheux défaut de vouloir mettre en ligne et montrer des choses qui étaient totalement terminées. Cette tendance a souvent eu raison de tout ce que j'entreprenais, je me décourageais car je n'arriverais pas à être pleinement satisfait et je ne voyais pas la fin. Surtout lorsqu'il s'agissait de projets personnels, il n'y a pas pire client que soi-même !

Cette fois, j'ai décidé de créer quelque chose que j'améliorerais en continu, comme ils disent de l'autre côté de l'Atlantique _Done is better than perfect_.

Entendez par là que la peinture est encore fraîche et qu'il manque même la deuxième couche à certains endroits bien que cette première version dispose déjà de fondations solides. Des améliorations verront le jour au fur et à mesure, vous pourrez suivre tout ça directement sur le [dépôt Github][github-site]. Si vous rencontrez des soucis où que vous souhaitez proposer des améliorations, n'hésitez pas à [ouvrir un ticket][github-ticket]

Sachez aussi que je vais profiter de cet espace pour réaliser quelques expérimentations sur différents sujets. Si vous naviguez avec un navigateur ancien, ne soyez pas étonné si tout n'est pas parfait.



Bravo, vous êtes arrivé jusqu'à la fin ! Il faut dire que je ne vous ai pas épargné pour ce premier article avec plus de 2100 mots ! Je vous rassure, ils ne seront pas tous aussi long ! J'espère qu'il vous aura intéressé et n'hésitez pas à me faire vos retours.







[paratype]: http://www.paratype.com/
[medium-ecrire]: https://medium.com/@chrishrmnn/ce-soir-j-ai-décidé-d-écrire-9ec274e333a4
[vrt-soqr]: http://soqr.fr/vertical-rhythm/
[vr-grid]: http://www.nicolas-hoffmann.net/source/1582-astuce-pour-tester-votre-rythme-vertical-en-CSS.html
[nico3333]: https://twitter.com/nico3333fr
[ambient-light]: https://developer.mozilla.org/fr/docs/WebAPI/Utiliser_les_%C3%A9v%C3%A9n%C3%A9ments_de_luminosit%C3%A9
[github-site]: http://www.github.com/chrishrmnn
[github-ticket]: http://www.github.com/chrishrmnn
[microdata]: http://www.alsacreations.com/article/lire/1509-microdata-microformats-schema-semantique.html
[conf-em]: http://lanyrd.com/2013/parisweb/sckdfg/
[sass-guidelines]: http://sass-guidelin.es/fr/
[css-guidelines]: http://cssguidelin.es/
[jekyll]: http://jekyllrb.com/
[liquid]: https://github.com/Shopify/liquid/wiki
[twig]: http://twig.sensiolabs.org/
[markdown]: http://daringfireball.net/projects/markdown/
[github-pages]: https://pages.github.com/
[jekyll-assets]: https://github.com/jekyll/jekyll-assets
[compress-html]: http://jch.penibelst.de/
[sitemap]: http://digitalshore.io/build-jekyll-sitemap-without-plugin/
[readtime]: http://carlosbecker.com/posts/jekyll-reading-time-without-plugins/