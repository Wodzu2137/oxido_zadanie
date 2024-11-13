
# Zadanie rekrutacyjne Oxido

Zadanie polega na wczytaniu pliku, Obrobieniu tekstu przy pomocy API OpenAI, zapisaniu go jako plik HTML i przygotowaniu podglądu artykułu. 



## Informacje

Projekt został utworzony w NodeJS w wersji 22.9.0


## Windows

[Zainstaluj nvm-windows w wersji 1.1.12](https://github.com/coreybutler/nvm-windows/releases/tag/1.1.12)

Zainstaluj odpowiednią wersję NodeJS

```bash
nvm install 22.9.0
```

Wybierz odpowiednią wersję NodeJS

```bash
nvm use 22.9.0
```

## Klonowanie repozytorium

```bash
git clone https://github.com/Wodzu2137/oxido_zadanie.git
```

Przejdź do folderu repozytorium w terminalu 

```bash
cd ./oxido_zadanie
```
Pamiętaj o podmianie "MIEJSCE_NA_KLUCZ_OPENAI" na faktyczny klucz API w pliku [server.js](https://github.com/Wodzu2137/oxido_zadanie/blob/main/server.js)

Uruchom skrypt

```bash
node server.js
```


## Działanie

Uruchomienie skryptu node [server.js](https://github.com/Wodzu2137/oxido_zadanie/blob/main/server.js) wywoła funkcję firstArticleGeneration. Ta najpierw spróbuje wczytać plik [article.txt](https://github.com/Wodzu2137/oxido_zadanie/blob/main/article.txt), następnie wykona zapytanie do API OpenAI, które wyśle prompta opisującego utworzenie kodu HTML i po przejściu error handlingu zapisze go do pliku [artykul.html](https://github.com/Wodzu2137/oxido_zadanie/blob/main/artykul.html). Oprócz tego utworzyłem szablon do którego <body> można wkleić artykuł ([szablon.html](https://github.com/Wodzu2137/oxido_zadanie/blob/main/szablon.html)) oraz gotowy, przykładowy podgląd artykułu ([podglad.html](https://github.com/Wodzu2137/oxido_zadanie/blob/main/podglad.html))