Qu'est-ce qu'un chemin ?

folder/folder/file.html

un chemin est l'emplacement unique d'un fichier (ou dossier) particulier.
un chemin pointe vers un fichier spécifique en suivant son "arbre de répertoire" (le dossier à l'intérieur d'un dossier, etc.).
il existe deux types de chemins d'accès, le premier est un chemin absolu, qui répertorie l'emplacement exact d'un fichier, à partir du répertoire racine ou le fichier dans lequel nous écrivons le chemin.

voici un exemple de chemin absolu. Les chemins absolus fonctionneront quel que soit votre répertoire de travail actuel (c'est le dossier dans lequel se trouve actuellement votre session de terminal)

/Users/marcel/coursdeweb/final/presentation.ppt

Lorsqu'un chemin commence par un / comme ci-dessus, cela signifie essentiellement que nous voulons commencer en haut (ou à la racine) du disque dur et nous frayer un chemin dans l'arborescence des répertoires (dossiers) à partir de là.

Voici un exemple de chemin relatif vers le même fichier. remarquez qu'il n'y a pas / au début, nous commençons simplement avec le nom d'un dossier, cela signifie que nous commençons à travailler sur l'arborescence des répertoires compte tenu du fichier ou du dossier dont nous sommes actuellement à l'intérieur. En supposant que le répertoire de travail présent est notre dossier d'accueil (dans ce cas, le dossier "mercel"), ce qui signifie que nous sommes actuellement dans le "/Users/marcel" :

coursdeweb/final/presentation.ppt

une autre façon d'écrire le même chemin relatif est de commencer par ceci : ./ quand on écrit des chemins, un . signifie "ce dossier" (c'est-à-dire le dossier dans lequel vous êtes actuellement)

./coursdeweb/final/presentation.ppt

maintenant, supposons que nous sommes actuellement dans le dossier "/Users/marcel/choses", ce qui signifie que nous devons revenir en arrière d'un répertoire (pour sortir du dossier "choses") avant de pouvoir sauter dans le dossier "final", lorsque nous voulons revenir en arrière d'un répertoire, nous utilisons le ../ par exemple :

../coursdeweb/final/presentation.ppt

vous pouvez utiliser ../ autant de fois que nécessaire afin de parcourir l'arborescence des répertoires vers le haut, alors disons que nous sommes encore un autre dossier plus profond, comme le dossier "/Users/marcel/choses/pictures" :

../../coursdeweb/final/presentation.ppt


/choses/
		├── docs/
		│   ├── journal/
		│   │   ├── jour1.txt
		│   │   ├── jour2.txt
		│   │   └── jour3.txt
		│   │
		│   └── nepas-ouvrir/
		│       └── motsdepass.txt
		│
		├── music/
		│   ├── cool-song.mp3
		│   ├── jam.mp3
		│   └── loop.mp3
		│
		└── pictures/
			├── chats/
			│   ├── chat-mimi.jpg
			│   ├── chat-pas-content.png
			│   └── chat-content.jpg
			│
			└── chient/
				├── wouf.jpg
				└── tropmimi.gif


