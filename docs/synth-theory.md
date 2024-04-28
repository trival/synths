# Some theory cheat sheet on sound synthesis

Simple cosine waves:

```
A1 = a1 * cos(w1 * t)
A2 = a2 * cos(w2 * t)
```

where A1 and A2 are the waveforms, a1 and a2 are gains (max amplitude), w1 and
w2 are frequencies and t is time.

## Amplitude modulation

```
A1 = (a1 + A2) * cos(w1 * t)

A1 = (a1 + (a2 * cos(w2 * t)) * cos(w1 * t)

A1 = a1 * cos(w1 * t) +
    a2 * cos(w2 * t) * cos(w1 * t)

A1 = a1 * cos(w1 * t) +
    0.5 * (a2 * cos(w1 + w2) * t) +
    0.5 * (a2 * cos(w1 - w2) * t)
```

AM creates 2 more signals, the Sum at w1 + w2 and the Difference at w1 - w2. The
Sum and Difference have half the amplitude of the initial modifying signal.

### Ring modulation

Special case of AM where only the Sum and Difference are left, without the
carrier signal.

```
y(t) = a(t) * b(t)
```

## Frequency modulation

```
A1 = a1 * cos((w1 + A2) * t)
A1 = a1 * cos((w1 + (a2 * cos(w2 * t))) * t)

Sidebands:

w = w1 +- n * w2

Modulation Index:

ß = (delta w1) / w2 = (a2 * 2) / w2

Bandwidth of the modulated signal:

B = 2 * w2 * (1 + ß)
```
