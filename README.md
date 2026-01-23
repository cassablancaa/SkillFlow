# SkillFlow / tymczasowy dla was , potem napiszemy readme porzadne 

1. Pierwsze kroki (tylko raz)

Pobierz projekt na swój komputer:

Bash
git clone https://github.com/cassablanca/SkillFlow.git
cd SkillFlow
2. Codzienny tryb pracy (Workflow)

Pracujemy na tzw. Feature Branchach. Nigdy nie wrzucamy kodu bezpośrednio do main!

Zawsze zacznij od pobrania zmian od innych:

Bash
git pull origin main
Stwórz brancha pod swoje zadanie (np. logowanie, stylowanie):

Bash
git checkout -b feature/nazwa-zadania
Rób swoje w kodzie, a potem zapisz zmiany:

Bash
git add .
git commit -m "Krótki opis co dodałeś/zmieniłeś"
Wyślij swój branch na GitHub:

Bash
git push origin feature/nazwa-zadania
3. Łączenie kodu (Pull Request)

Gdy skończysz zadanie:

Wejdź na GitHub w nasze repozytorium.

Zabaczysz żółty pasek z przyciskiem "Compare & pull request" – kliknij go.

Ktoś z zespołu musi zerknąć na zmiany i kliknąć Approve.

Dopiero wtedy robimy Merge do głównej gałęzi.

Przydatne komendy

git status – sprawdza, co pozmieniałeś.

git branch – pokazuje, na jakim branchu aktualnie jesteś.

git checkout main – powrót do głównej gałęzi.

Pamiętajcie o .gitignore! Nie wrzucamy zbędnych plików tymczasowych ani folderów typu node_modules.
