-- Open up the database file in the DB Browser for SQLite application to see it
-- Copy and paste the queries below into your queries.sql file and comment them out. Then you can write a query for each requrement and refer back to them later as a resource
-- When you have written a query, paste it into DB Browser and test it by clicking the tab labeled "Execute SQL"
-- For each of the following exercises, provide the appropriate query. Everything from class and the Sqlite documentation for SQL keywords and functions is fair game.

-- Query all of the entries in the Genre table

SELECT * FROM Genre

-- Using the INSERT statement, add one of your favorite artists to the Artist table.

INSERT INTO "Artist" ("ArtistName", "YearEstablished")
 VALUES ("John Mayer", "1999");

-- Using the INSERT statement, add one, or more, albums by your artist to the Album table.

INSERT INTO "Album" ("Title", "ReleaseDate", "AlbumLength", "Label", "ArtistId", "GenreId")
 VALUES ("Heavier Things", "2004", 4578, "Columbia", 32, 3);

-- Using the INSERT statement, add some songs that are on that album to the Song table.

INSERT INTO "Song" ("Title", "SongLength", "ReleaseDate", "GenreId", "ArtistId", "AlbumId")
 VALUES ( "Bigger than my body", 413, 2004, 3, 32, 29);

-- Write a SELECT query that provides the song titles, album title, and artist name for all of the data you just entered in. Use the LEFT JOIN keyword sequence to connect the tables, and the WHERE keyword to filter the results to the album and artist you added. Here is some more info on joins that might help.

SELECT a.Title, s.Title, art.ArtistName
FROM Album a 
LEFT JOIN Song s ON s.AlbumId = a.AlbumId
LEFT JOIN Artist art ON art.ArtistId = a.ArtistId
WHERE a.Title = "Heavier Things"

-- Write a SELECT statement to display how many songs exist for each album. You'll need to use the COUNT() function and the GROUP BY keyword sequence.

SELECT a.Title, COUNT(s.AlbumId)
FROM Album a, Song s
WHERE s.AlbumID = a.AlbumID
GROUP BY a.Title

-- Write a SELECT statement to display how many songs exist for each artist. You'll need to use the COUNT() function and the GROUP BY keyword sequence.

SELECT art.ArtistName, COUNT(s.ArtistId)
FROM Artist art, Song s
WHERE s.ArtistId = art.ArtistId
GROUP BY art.ArtistName

-- Write a SELECT statement to display how many songs exist for each genre. You'll need to use the COUNT() function and the GROUP BY keyword sequence.

SELECT g.Label, COUNT(s.GenreId)
FROM Genre g, Song s
WHERE s.GenreId = g.GenreId
GROUP BY g.Label

-- Using MAX() function, write a select statement to find the album with the longest duration. The result should display the album title and the duration.

SELECT a.Title, MAX(a.AlbumLength)
FROM Album a

-- Using MAX() function, write a select statement to find the song with the longest duration. The result should display the song title and the duration.

SELECT s.Title, MAX(s.SongLength)
FROM Song s

-- Modify the previous query to also display the title of the album.

SELECT s.Title 'Song Title', MAX(s.SongLength) 'Song Length', a.Title 'Album'
FROM  Album a, Song s
WHERE s.AlbumId = a.AlbumId



