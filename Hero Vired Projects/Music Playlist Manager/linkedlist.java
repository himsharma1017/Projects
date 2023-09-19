package PlaylistShuffleManager;

public class linkedlist {
    // Class for representing a song
class Song {
    String title;
    String artist;
    String album;
    int duration; // in seconds

    public Song(String title, String artist, String album, int duration) {
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.duration = duration;
    }
}

// Class for representing a node in the linked list
class SongNode {
    Song song;
    SongNode next;

    public SongNode(Song song) {
        this.song = song;
        this.next = null;
    }
}

// Class for managing the playlist
class PlaylistManager {
    private SongNode head;

    // Function to add a song to the playlist
    public void addSong(String title, String artist, String album, int duration) {
        Song newSong = new Song(title, artist, album, duration);
        SongNode newNode = new SongNode(newSong);

        if (head == null) {
            head = newNode;
        } else {
            SongNode current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Function to remove a song from the playlist by title
    public void removeSong(String title) {
        if (head == null) {
            return;
        }

        if (head.song.title.equals(title)) {
            head = head.next;
            return;
        }

        SongNode current = head;
        while (current.next != null) {
            if (current.next.song.title.equals(title)) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    // Function to reorder a song within the playlist
    public void reorderSong(String title, int newPosition) {
        if (head == null) {
            return;
        }

        SongNode current = head;
        SongNode prev = null;
        int currentPosition = 1;

        while (current != null && currentPosition != newPosition) {
            prev = current;
            current = current.next;
            currentPosition++;
        }

        if (current == null) {
            return; // newPosition is out of bounds
        }

        if (prev == null) {
            head = current.next;
        } else {
            prev.next = current.next;
        }

        current.next = null;

        if (newPosition == 1) {
            current.next = head;
            head = current;
        } else {
            SongNode temp = head;
            for (int i = 1; i < newPosition - 2; i++) {
                temp = temp.next;
            }
            current.next = temp.next;
            temp.next = current;
        }
    }

    // Function to shuffle the playlist
    public void shufflePlaylist() {
        if (head == null || head.next == null) {
            return;
        }

        SongNode[] nodes = new SongNode[countNodes()];
        SongNode current = head;

        for (int i = 0; i < nodes.length; i++) {
            nodes[i] = current;
            current = current.next;
        }

        // Fisher-Yates shuffle algorithm
        for (int i = nodes.length - 1; i > 0; i--) {
            int j = (int) (Math.random() * (i + 1));
            SongNode temp = nodes[i];
            nodes[i] = nodes[j];
            nodes[j] = temp;
        }

        head = nodes[0];
        current = head;

        for (int i = 1; i < nodes.length; i++) {
            current.next = nodes[i];
            current = current.next;
        }

        current.next = null;
    }

    // Function to calculate the total duration of the playlist
    public int calculateTotalDuration() {
        int totalDuration = 0;
        SongNode current = head;

        while (current != null) {
            totalDuration += current.song.duration;
            current = current.next;
        }

        return totalDuration;
    }

    // Function to count the number of nodes in the playlist
    private int countNodes() {
        int count = 0;
        SongNode current = head;

        while (current != null) {
            count++;
            current = current.next;
        }

        return count;
    }

    // Function to display the playlist
    public void displayPlaylist() {
        SongNode current = head;

        while (current != null) {
            System.out.println("Title: " + current.song.title +
                    ", Artist: " + current.song.artist +
                    ", Album: " + current.song.album +
                    ", Duration: " + current.song.duration + " seconds");
            current = current.next;
        }
    }
}

public class Main {
    public static void main(String[] args) {
        PlaylistManager playlist = new PlaylistManager();

        // Adding songs to the playlist
        playlist.addSong("Song A", "Artist 1", "Album X", 180);
        playlist.addSong("Song B", "Artist 2", "Album Y", 240);
        playlist.addSong("Song C", "Artist 3", "Album Z", 200);

        // Displaying the playlist
        System.out.println("Current Playlist:");
        playlist.displayPlaylist();

        // Removing a song from the playlist
        playlist.removeSong("Song B");

        // Displaying the updated playlist
        System.out.println("\nPlaylist after removing Song B:");
        playlist.displayPlaylist();

        // Reordering a song within the playlist
        playlist.reorderSong("Song A", 2);

        // Displaying the updated playlist
        System.out.println("\nPlaylist after reordering Song A to position 2:");
        playlist.displayPlaylist();

        // Shuffling the playlist
        playlist.shufflePlaylist();

        // Displaying the shuffled playlist
        System.out.println("\nShuffled Playlist:");
        playlist.displayPlaylist();

        // Calculating the total duration of the playlist
        int totalDuration = playlist.calculateTotalDuration();
        int minutes = totalDuration / 60;
        int seconds = totalDuration % 60;
        System.out.println("\nTotal Duration: " + minutes + " minutes " + seconds + " seconds");
    }
}

}
