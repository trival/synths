# trival synths

An experimental repository to play with digital sound synthesis using the
excellent [elementary audio](https://elementary.audio) library.

Beside solid js for UI rendering there are no other dependencies. All utils for
generating notes, midi, chords or sequences are included and developed as
needed. This is a playground to explore the space of sound synthesis using code.

All sound experiments can be found in the [tracks](/src/tracks/) folder. The
tracks are set up to allow live coding using vite hot reloading, so sound change
on the fly as you modify the audio code.

The resulting UI is published to https://synths.pages.dev using cloudflare. But
the core value lies in the code. Feel free to checkout and tweak the code for
extended fun.

## Starting locally

```bash
npm i
npm run start
```

Then open http://localhost:3000

## Using nim language

Some tracks use the [nim language](https://nim-lang.org/), because it is nice to
write DSLs with operator overloading and other shortcuts to using elementary.

To compile the nim tracks to js, please compile the file `play.nim` like so:

```
nim js -d:danger src/.../play.nim
```

or use the script

```
npm run watch-nim
```

which compiles these nim files after each file changes.

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file
for more info.
