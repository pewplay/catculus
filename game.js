/* Catculus by Antti Haavikko (js13kGames 2025), MIT License - see LICENSE. Readable build for PewPlay; ZzFX by Frank Force (MIT), SoundBox player by Marcus Geelnard (zlib). Built from the original TypeScript with esbuild. */
(() => {
  // src/song.ts
  var song = {
    songData: [
      {
        // Instrument 0
        i: [
          0,
          // OSC1_WAVEFORM
          255,
          // OSC1_VOL
          116,
          // OSC1_SEMI
          79,
          // OSC1_XENV
          0,
          // OSC2_WAVEFORM
          255,
          // OSC2_VOL
          114,
          // OSC2_SEMI
          0,
          // OSC2_DETUNE
          83,
          // OSC2_XENV
          0,
          // NOISE_VOL
          4,
          // ENV_ATTACK
          6,
          // ENV_SUSTAIN
          69,
          // ENV_RELEASE
          52,
          // ENV_EXP_DECAY
          0,
          // ARP_CHORD
          0,
          // ARP_SPEED
          0,
          // LFO_WAVEFORM
          0,
          // LFO_AMT
          0,
          // LFO_FREQ
          0,
          // LFO_FX_FREQ
          2,
          // FX_FILTER
          14,
          // FX_FREQ
          0,
          // FX_RESONANCE
          0,
          // FX_DIST
          32,
          // FX_DRIVE
          0,
          // FX_PAN_AMT
          0,
          // FX_PAN_FREQ
          0,
          // FX_DELAY_AMT
          0
          // FX_DELAY_TIME
        ],
        // Patterns
        p: [, 3, 1, 2, 1, 2, 1, 2, 1, 2, 3, , 3, , 3, 1, 2, 3],
        // Columns
        c: [
          {
            n: [147, , , , , , , , , , , , , , , , 147, , , , , , , , , , 147],
            f: []
          },
          {
            n: [147, , , , , , , , , , , , , , , , 147, , , , , , , , 147, , 147, 147, , , 147],
            f: []
          },
          {
            n: [, , , , , , , , , , , , , , , , , , , , , , , , 147, , 147, 147, , , 147],
            f: []
          }
        ]
      },
      {
        // Instrument 1
        i: [
          1,
          // OSC1_WAVEFORM
          221,
          // OSC1_VOL
          128,
          // OSC1_SEMI
          64,
          // OSC1_XENV
          0,
          // OSC2_WAVEFORM
          210,
          // OSC2_VOL
          128,
          // OSC2_SEMI
          0,
          // OSC2_DETUNE
          64,
          // OSC2_XENV
          255,
          // NOISE_VOL
          4,
          // ENV_ATTACK
          6,
          // ENV_SUSTAIN
          73,
          // ENV_RELEASE
          79,
          // ENV_EXP_DECAY
          0,
          // ARP_CHORD
          0,
          // ARP_SPEED
          0,
          // LFO_WAVEFORM
          64,
          // LFO_AMT
          7,
          // LFO_FREQ
          1,
          // LFO_FX_FREQ
          3,
          // FX_FILTER
          195,
          // FX_FREQ
          15,
          // FX_RESONANCE
          0,
          // FX_DIST
          32,
          // FX_DRIVE
          20,
          // FX_PAN_AMT
          0,
          // FX_PAN_FREQ
          24,
          // FX_DELAY_AMT
          6
          // FX_DELAY_TIME
        ],
        // Patterns
        p: [, 3, 1, 2, 1, 2, 1, 2, 1, 2, 3, , 3, , 3, 1, 2, 3],
        // Columns
        c: [
          {
            n: [, , , , 135, , , , , , , , 135, , , , , , , , 135, , , , , , , , 135, , 135],
            f: []
          },
          {
            n: [, , , , 135, , , , , , , , 135, , , , , , , , 135, , , , , , , , 135, 135, , 135],
            f: []
          },
          {
            n: [, , , , , , , , , , , , , , , , , , , , , , , , , , , , 135, 135, , 135],
            f: []
          }
        ]
      },
      {
        // Instrument 2
        i: [
          0,
          // OSC1_WAVEFORM
          0,
          // OSC1_VOL
          140,
          // OSC1_SEMI
          0,
          // OSC1_XENV
          0,
          // OSC2_WAVEFORM
          0,
          // OSC2_VOL
          140,
          // OSC2_SEMI
          0,
          // OSC2_DETUNE
          0,
          // OSC2_XENV
          81,
          // NOISE_VOL
          4,
          // ENV_ATTACK
          10,
          // ENV_SUSTAIN
          47,
          // ENV_RELEASE
          55,
          // ENV_EXP_DECAY
          0,
          // ARP_CHORD
          0,
          // ARP_SPEED
          0,
          // LFO_WAVEFORM
          187,
          // LFO_AMT
          5,
          // LFO_FREQ
          0,
          // LFO_FX_FREQ
          1,
          // FX_FILTER
          239,
          // FX_FREQ
          135,
          // FX_RESONANCE
          0,
          // FX_DIST
          32,
          // FX_DRIVE
          108,
          // FX_PAN_AMT
          5,
          // FX_PAN_FREQ
          16,
          // FX_DELAY_AMT
          4
          // FX_DELAY_TIME
        ],
        // Patterns
        p: [1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2],
        // Columns
        c: [
          {
            n: [147, , , , , , , , 147, , , , , , , , 147, , , , 147, , , , 147, , , , 147, , 147],
            f: []
          },
          {
            n: [147, , , , , , , , 147, , , , , , , , 147, , , , 147],
            f: []
          }
        ]
      },
      {
        // Instrument 3
        i: [
          1,
          // OSC1_WAVEFORM
          192,
          // OSC1_VOL
          128,
          // OSC1_SEMI
          0,
          // OSC1_XENV
          1,
          // OSC2_WAVEFORM
          191,
          // OSC2_VOL
          116,
          // OSC2_SEMI
          9,
          // OSC2_DETUNE
          0,
          // OSC2_XENV
          0,
          // NOISE_VOL
          6,
          // ENV_ATTACK
          22,
          // ENV_SUSTAIN
          34,
          // ENV_RELEASE
          0,
          // ENV_EXP_DECAY
          37,
          // ARP_CHORD
          0,
          // ARP_SPEED
          0,
          // LFO_WAVEFORM
          69,
          // LFO_AMT
          3,
          // LFO_FREQ
          1,
          // LFO_FX_FREQ
          1,
          // FX_FILTER
          23,
          // FX_FREQ
          167,
          // FX_RESONANCE
          0,
          // FX_DIST
          32,
          // FX_DRIVE
          23,
          // FX_PAN_AMT
          6,
          // FX_PAN_FREQ
          25,
          // FX_DELAY_AMT
          6
          // FX_DELAY_TIME
        ],
        // Patterns
        p: [1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, , 1, 1, 2, 1, 1, 2],
        // Columns
        c: [
          {
            n: [114, , 116, , , , 116, , , , , , , , 118, , 114, , 116, , , , 116, , , , , , , , 118],
            f: []
          },
          {
            n: [114, , 116, , , , 116, , , , , , , , 118, , 114, , 116, , , , 116],
            f: []
          }
        ]
      },
      {
        // Instrument 4
        i: [
          1,
          // OSC1_WAVEFORM
          192,
          // OSC1_VOL
          128,
          // OSC1_SEMI
          0,
          // OSC1_XENV
          1,
          // OSC2_WAVEFORM
          191,
          // OSC2_VOL
          116,
          // OSC2_SEMI
          9,
          // OSC2_DETUNE
          0,
          // OSC2_XENV
          0,
          // NOISE_VOL
          6,
          // ENV_ATTACK
          22,
          // ENV_SUSTAIN
          28,
          // ENV_RELEASE
          0,
          // ENV_EXP_DECAY
          18,
          // ARP_CHORD
          0,
          // ARP_SPEED
          0,
          // LFO_WAVEFORM
          39,
          // LFO_AMT
          6,
          // LFO_FREQ
          1,
          // LFO_FX_FREQ
          1,
          // FX_FILTER
          23,
          // FX_FREQ
          167,
          // FX_RESONANCE
          0,
          // FX_DIST
          32,
          // FX_DRIVE
          20,
          // FX_PAN_AMT
          6,
          // FX_PAN_FREQ
          25,
          // FX_DELAY_AMT
          6
          // FX_DELAY_TIME
        ],
        // Patterns
        p: [, , 4, 4, 1, 1, 2, 3, 2, 3, , , , , , 2, 3, 4],
        // Columns
        c: [
          {
            n: [140, , 140, , , , 145, , , , 140, , 147, , , , , , 147, , 147, , 147, , 150, , 150, , 147],
            f: []
          },
          {
            n: [140, , , 140, 140, , 147, , 148, , 150, , 147, , 152, , , , 152, , 152, , 155, , 157, 157, 155, , 152, , 150, 150],
            f: []
          },
          {
            n: [140, , , , 140, , 147, , 150, , 150, , 147, , 152, , , 152, 152, , 152, , 143, , 145, , 135, , 138, , 135, 135],
            f: []
          },
          {
            n: [140, , , , , , 145, , , , 140, , 147, , , , , , , , , , 147, , 150, , 150, , 147],
            f: []
          }
        ]
      },
      {
        // Instrument 5
        i: [
          1,
          // OSC1_WAVEFORM
          84,
          // OSC1_VOL
          128,
          // OSC1_SEMI
          0,
          // OSC1_XENV
          1,
          // OSC2_WAVEFORM
          32,
          // OSC2_VOL
          128,
          // OSC2_SEMI
          2,
          // OSC2_DETUNE
          0,
          // OSC2_XENV
          0,
          // NOISE_VOL
          6,
          // ENV_ATTACK
          22,
          // ENV_SUSTAIN
          31,
          // ENV_RELEASE
          0,
          // ENV_EXP_DECAY
          54,
          // ARP_CHORD
          0,
          // ARP_SPEED
          1,
          // LFO_WAVEFORM
          69,
          // LFO_AMT
          3,
          // LFO_FREQ
          1,
          // LFO_FX_FREQ
          1,
          // FX_FILTER
          2,
          // FX_FREQ
          57,
          // FX_RESONANCE
          0,
          // FX_DIST
          32,
          // FX_DRIVE
          13,
          // FX_PAN_AMT
          7,
          // FX_PAN_FREQ
          28,
          // FX_DELAY_AMT
          6
          // FX_DELAY_TIME
        ],
        // Patterns
        p: [, , , , , , , , , , , 3, 2, 1, 2],
        // Columns
        c: [
          {
            n: [140, , 138, , 142, , 138, , , , 138, , 143, , 138, , 147, 143, 140, , 140, , 143, 140, 147, , 140, , 140, , 145, 147],
            f: []
          },
          {
            n: [143, , , , 150, , , , 143, , 150, , 143, , 147, , 150, 145, 147, , 142, , 147, , 147, , 142, , 138],
            f: []
          },
          {
            n: [140, , , , 142, , , , , , , , 143, , , , 147, , , , 140, , , , 147, , , , 140, , 147],
            f: []
          }
        ]
      }
    ],
    rowLen: 5513,
    // In sample lengths
    patternLen: 32,
    // Rows per pattern
    endPattern: 17,
    // End pattern
    numChannels: 6
    // Number of channels
  };

  // src/engine/audio-player.ts
  var CPlayer = function() {
    const osc_sin = function(value) {
      return Math.sin(value * 6.283184);
    };
    const osc_saw = function(value) {
      return 2 * (value % 1) - 1;
    };
    const osc_square = function(value) {
      return value % 1 < 0.5 ? 1 : -1;
    };
    const osc_tri = function(value) {
      const v2 = value % 1 * 4;
      if (v2 < 2) return v2 - 1;
      return 3 - v2;
    };
    const getnotefreq = function(n) {
      return 0.003959503758 * 2 ** ((n - 128) / 12);
    };
    const createNote = function(instr, n, rowLen) {
      const osc1 = mOscillators[instr.i[0]], o1vol = instr.i[1], o1xenv = instr.i[3] / 32, osc2 = mOscillators[instr.i[4]], o2vol = instr.i[5], o2xenv = instr.i[8] / 32, noiseVol = instr.i[9], attack = instr.i[10] * instr.i[10] * 4, sustain = instr.i[11] * instr.i[11] * 4, release2 = instr.i[12] * instr.i[12] * 4, releaseInv = 1 / release2, expDecay = -instr.i[13] / 16, arp = instr.i[14], arpInterval = rowLen * 2 ** (2 - instr.i[15]);
      const noteBuf = new Int32Array(attack + sustain + release2);
      let c1 = 0, c2 = 0;
      let j, j2, e, t, rsample, o1t, o2t;
      for (j = 0, j2 = 0; j < attack + sustain + release2; j++, j2++) {
        if (j2 >= 0) {
          o1t = getnotefreq(n + (arp & 15) + instr.i[2] - 128);
          o2t = getnotefreq(n + (arp & 15) + instr.i[6] - 128) * (1 + 8e-4 * instr.i[7]);
        }
        e = 1;
        if (j < attack) {
          e = j / attack;
        } else if (j >= attack + sustain) {
          e = (j - attack - sustain) * releaseInv;
          e = (1 - e) * 3 ** (expDecay * e);
        }
        c1 += o1t * e ** o1xenv;
        rsample = osc1(c1) * o1vol;
        c2 += o2t * e ** o2xenv;
        rsample += osc2(c2) * o2vol;
        if (noiseVol) {
          rsample += (2 * Math.random() - 1) * noiseVol;
        }
        noteBuf[j] = 80 * rsample * e | 0;
      }
      return noteBuf;
    };
    var mOscillators = [
      osc_sin,
      osc_square,
      osc_saw,
      osc_tri
    ];
    let mSong, mLastRow, mCurrentCol, mNumWords, mMixBuf;
    this.init = function(song2) {
      mSong = song2;
      mLastRow = song2.endPattern;
      mCurrentCol = 0;
      mNumWords = song2.rowLen * song2.patternLen * (mLastRow + 1) * 2;
      mMixBuf = new Int32Array(mNumWords);
    };
    this.generate = function() {
      let i, j, b, p, row, col, n, cp, k, t, lfor, e, x, rsample, rowStartSample, f, da;
      const chnBuf = new Int32Array(mNumWords), instr = mSong.songData[mCurrentCol], rowLen = mSong.rowLen, patternLen = mSong.patternLen;
      let low = 0, band = 0, high;
      let lsample, filterActive = false;
      const noteCache = [];
      for (p = 0; p <= mLastRow; ++p) {
        cp = instr.p[p];
        for (row = 0; row < patternLen; ++row) {
          const oscLFO = mOscillators[instr.i[16]], lfoAmt = instr.i[17] / 512, lfoFreq = 2 ** (instr.i[18] - 9) / rowLen, fxLFO = instr.i[19], fxFilter = instr.i[20], fxFreq = instr.i[21] * 43.23529 * 3.141592 / 44100, q = 1 - instr.i[22] / 255, dist = instr.i[23] * 1e-5, drive = instr.i[24] / 32, panAmt = instr.i[25] / 512, panFreq = 6.283184 * 2 ** (instr.i[26] - 9) / rowLen, dlyAmt = instr.i[27] / 255, dly = instr.i[28] * rowLen & ~1;
          rowStartSample = (p * patternLen + row) * rowLen;
          for (col = 0; col < 4; ++col) {
            n = cp ? instr.c[cp - 1].n[row + col * patternLen] : 0;
            if (n) {
              if (!noteCache[n]) {
                noteCache[n] = createNote(instr, n, rowLen);
              }
              const noteBuf = noteCache[n];
              for (j = 0, i = rowStartSample * 2; j < noteBuf.length; j++, i += 2) {
                chnBuf[i] += noteBuf[j];
              }
            }
          }
          for (j = 0; j < rowLen; j++) {
            k = (rowStartSample + j) * 2;
            rsample = chnBuf[k];
            if (rsample || filterActive) {
              f = fxFreq;
              if (fxLFO) {
                f *= oscLFO(lfoFreq * k) * lfoAmt + 0.5;
              }
              f = 1.5 * Math.sin(f);
              low += f * band;
              high = q * (rsample - band) - low;
              band += f * high;
              rsample = fxFilter == 3 ? band : fxFilter == 1 ? high : low;
              if (dist) {
                rsample *= dist;
                rsample = rsample < 1 ? rsample > -1 ? osc_sin(rsample * 0.25) : -1 : 1;
                rsample /= dist;
              }
              rsample *= drive;
              filterActive = rsample * rsample > 1e-5;
              t = Math.sin(panFreq * k) * panAmt + 0.5;
              lsample = rsample * (1 - t);
              rsample *= t;
            } else {
              lsample = 0;
            }
            if (k >= dly) {
              lsample += chnBuf[k - dly + 1] * dlyAmt;
              rsample += chnBuf[k - dly] * dlyAmt;
            }
            chnBuf[k] = lsample | 0;
            chnBuf[k + 1] = rsample | 0;
            mMixBuf[k] += lsample | 0;
            mMixBuf[k + 1] += rsample | 0;
          }
        }
      }
      mCurrentCol++;
      return mCurrentCol / mSong.numChannels;
    };
    this.createAudioBuffer = function(context) {
      const buffer = context.createBuffer(2, mNumWords / 2, 44100);
      for (let i = 0; i < 2; i++) {
        const data = buffer.getChannelData(i);
        for (let j = i; j < mNumWords; j += 2) {
          data[j >> 1] = mMixBuf[j] / 65536;
        }
      }
      return buffer;
    };
    this.createWave = function() {
      const headerLen = 44;
      const l1 = headerLen + mNumWords * 2 - 8;
      const l2 = l1 - 36;
      const wave = new Uint8Array(headerLen + mNumWords * 2);
      wave.set(
        [
          82,
          73,
          70,
          70,
          l1 & 255,
          l1 >> 8 & 255,
          l1 >> 16 & 255,
          l1 >> 24 & 255,
          87,
          65,
          86,
          69,
          102,
          109,
          116,
          32,
          16,
          0,
          0,
          0,
          1,
          0,
          2,
          0,
          68,
          172,
          0,
          0,
          16,
          177,
          2,
          0,
          4,
          0,
          16,
          0,
          100,
          97,
          116,
          97,
          l2 & 255,
          l2 >> 8 & 255,
          l2 >> 16 & 255,
          l2 >> 24 & 255
        ]
      );
      for (let i = 0, idx = headerLen; i < mNumWords; ++i) {
        let y = mMixBuf[i];
        y = y < -32767 ? -32767 : y > 32767 ? 32767 : y;
        wave[idx++] = y & 255;
        wave[idx++] = y >> 8 & 255;
      }
      return wave;
    };
    this.getData = function(t, n) {
      const i = 2 * Math.floor(t * 44100);
      const d = new Array(n);
      for (let j = 0; j < 2 * n; j += 1) {
        const k = i + j;
        d[j] = t > 0 && k < mMixBuf.length ? mMixBuf[k] / 32768 : 0;
      }
      return d;
    };
  };

  // src/engine/zzfx.ts
  function zzfx(...parameters) {
    return ZZFX.play(...parameters);
  }
  var ZZFX = {
    // master volume scale
    volume: 0.3,
    // sample rate for audio
    sampleRate: 44100,
    // shared audio context, created lazily on the first user gesture
    ctx: null,
    get x() {
      if (!this.ctx) this.ctx = new AudioContext();
      if (this.ctx.state === "suspended") this.ctx.resume().catch(() => void 0);
      return this.ctx;
    },
    // play a sound from zzfx paramerters
    play: function(...parameters) {
      return this.playSamples(this.buildSamples(...parameters));
    },
    // play an array of samples
    playSamples: function(...samples) {
      const buffer = this.x.createBuffer(samples.length, samples[0].length, this.sampleRate), source = this.x.createBufferSource();
      samples.map((d, i) => buffer.getChannelData(i).set(d));
      source.buffer = buffer;
      source.connect(this.x.destination);
      source.start();
      return source;
    },
    // build an array of samples
    buildSamples: function(volume = 1, randomness = 0.05, frequency = 220, attack = 0, sustain = 0, release2 = 0.1, shape = 0, shapeCurve = 1, slide = 0, deltaSlide = 0, pitchJump = 0, pitchJumpTime = 0, repeatTime = 0, noise = 0, modulation = 0, bitCrush = 0, delay = 0, sustainVolume = 1, decay = 0, tremolo = 0) {
      let PI2 = Math.PI * 2, sampleRate = this.sampleRate, sign = (v) => v > 0 ? 1 : -1, startSlide = slide *= 500 * PI2 / sampleRate / sampleRate, startFrequency = frequency *= (1 + randomness * 2 * Math.random() - randomness) * PI2 / sampleRate, b = [], t = 0, tm = 0, i = 0, j = 1, r = 0, c = 0, s = 0, f, length;
      attack = attack * sampleRate + 9;
      decay *= sampleRate;
      sustain *= sampleRate;
      release2 *= sampleRate;
      delay *= sampleRate;
      deltaSlide *= 500 * PI2 / sampleRate ** 3;
      modulation *= PI2 / sampleRate;
      pitchJump *= PI2 / sampleRate;
      pitchJumpTime *= sampleRate;
      repeatTime = repeatTime * sampleRate | 0;
      for (length = attack + decay + sustain + release2 + delay | 0; i < length; b[i++] = s) {
        if (!(++c % (bitCrush * 100 | 0))) {
          s = shape ? shape > 1 ? shape > 2 ? shape > 3 ? (
            // wave shape
            Math.sin((t % PI2) ** 3)
          ) : (
            // 4 noise
            Math.max(Math.min(Math.tan(t), 1), -1)
          ) : (
            // 3 tan
            1 - (2 * t / PI2 % 2 + 2) % 2
          ) : (
            // 2 saw
            1 - 4 * Math.abs(Math.round(t / PI2) - t / PI2)
          ) : (
            // 1 triangle
            Math.sin(t)
          );
          s = (repeatTime ? 1 - tremolo + tremolo * Math.sin(PI2 * i / repeatTime) : 1) * sign(s) * Math.abs(s) ** shapeCurve * // curve 0=square, 2=pointy
          volume * this.volume * // envelope
          (i < attack ? i / attack : (
            // attack
            i < attack + decay ? (
              // decay
              1 - (i - attack) / decay * (1 - sustainVolume)
            ) : (
              // decay falloff
              i < attack + decay + sustain ? (
                // sustain
                sustainVolume
              ) : (
                // sustain volume
                i < length - delay ? (
                  // release
                  (length - i - delay) / release2 * // release falloff
                  sustainVolume
                ) : (
                  // release volume
                  0
                )
              )
            )
          ));
          s = delay ? s / 2 + (delay > i ? 0 : (
            // delay
            (i < length - delay ? 1 : (length - i) / delay) * // release delay 
            b[i - delay | 0] / 2
          )) : s;
        }
        f = (frequency += slide += deltaSlide) * // frequency
        Math.cos(modulation * tm++);
        t += f - f * noise * (1 - (Math.sin(i) + 1) * 1e9 % 2);
        if (j && ++j > pitchJumpTime) {
          frequency += pitchJump;
          startFrequency += pitchJump;
          j = 0;
        }
        if (repeatTime && !(++r % repeatTime)) {
          frequency = startFrequency;
          slide = startSlide;
          j || (j = 1);
        }
      }
      return b;
    }
    // get frequency of a musical note on a diatonic scale
    // getNote: function(semitoneOffset=0, rootNoteFrequency=440)
    // {
    //     return rootNoteFrequency * 2**(semitoneOffset/12);
    // }
  };

  // src/engine/audio.ts
  var AudioManager = class {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    constructor() {
      this.started = false;
      this.soundVolume = 0.5;
      this.musicVolume = 0.5;
      this.unlocked = false;
      this.musicReady = false;
      this.muted = false;
      this.hidden = false;
      this.audio = document.createElement("audio");
      document.body.appendChild(this.audio);
      try {
        this.muted = localStorage.getItem("catculus:muted") === "1";
      } catch (e) {
      }
    }
    prepare() {
      this.started = true;
      if (!song) return;
      const player = new CPlayer();
      player.init(song);
      player.generate();
      this.loaded = false;
      const timer = setInterval(() => {
        if (this.loaded) return;
        this.loaded = player.generate() >= 1;
        if (this.loaded) {
          const wave = player.createWave();
          this.musicUrl = URL.createObjectURL(new Blob([wave], { type: "audio/wav" }));
          this.audio.loop = true;
          this.audio.volume = this.musicVolume;
          this.audio.preservesPitch = false;
          clearInterval(timer);
        }
      }, 5);
    }
    getPitch() {
      return this.audio.playbackRate;
    }
    setPitch(target) {
      if (target < 0.1) {
        this.audio.volume = 0;
        return;
      }
      this.audio.playbackRate = target;
    }
    startMusic() {
      if (this.unlocked) return;
      this.unlocked = true;
      const timer = setInterval(() => {
        if (!this.loaded) return;
        clearInterval(timer);
        this.musicReady = true;
        this.resumeMusic();
      }, 5);
      this.audio.addEventListener("timeupdate", () => {
        if (this.audio.currentTime > this.audio.duration - 0.21) {
          this.audio.currentTime = 0;
          this.resumeMusic();
        }
      });
    }
    resumeMusic() {
      if (!this.musicReady || this.muted || this.hidden) return;
      if (!this.audio.src) {
        this.audio.src = this.musicUrl;
        this.audio.preservesPitch = false;
      }
      this.audio.play().catch(() => void 0);
    }
    isMuted() {
      return this.muted;
    }
    setMuted(muted) {
      this.muted = muted;
      try {
        localStorage.setItem("catculus:muted", muted ? "1" : "0");
      } catch (e) {
      }
      if (muted) this.audio.pause();
      else this.resumeMusic();
    }
    setHidden(hidden) {
      this.hidden = hidden;
      if (hidden) this.audio.pause();
      else this.resumeMusic();
    }
    play(values) {
      if (!this.unlocked || this.muted || this.hidden) return;
      zzfx(...values.map((v, i) => i === 0 ? (v != null ? v : 1) * 0.6 * this.soundVolume : v));
    }
    button() {
      this.play([2.5, , 372, 0.02, 0.01, 2e-3, 2, 4.8, -42, -11, 8, 0.6, , 0.9, , , 0.03, 0.76, 0.02, 0.24, -1500]);
    }
    buttonHover() {
    }
    select() {
    }
    land() {
      this.play([0.3, , 136, 0.04, 0.09, 0.07, 1, 3.6, , -32, , , , 0.5, , , , 0.88, 0.06]);
    }
    jump() {
      this.play([0.7, , 353, 0.03, 0.03, 0.15, , 2.7, 7, 54, , , , , , 0.1, , 0.62, , , -1065]);
      this.play([0.2, , 435, 0.01, 0.07, , , 2.1, 24, , , , , , , 0.1, , 0.82, 0.04, , -1498]);
    }
    skills() {
      this.play([, , 296, 0.01, 0.21, 0.29, , 0.9, -1, , 323, 0.09, 0.05, , , , , 0.91, 0.16]);
      this.play([1.1, , 257, 0.02, 0.06, 0.18, , 3.9, , 15, , , , , , 0.1, , 0.62, 0.03, , -1091]);
      this.play([2, , 69, , 0.09, 0.44, , 1.4, , 3, , , , 2, , 0.9, 0.3, 0.38, 0.19, , -3432]);
    }
    skill() {
      this.play([0.5, , 627, 0.01, 0.14, 0.27, 1, 2.9, -1, , 37, 0.06, 0.08, 0.3, , , , 0.87, 0.13, 0.26]);
      this.play([, , 474, , 0.05, 0.18, , 0.9, , , , , , , , , , 0.85, 0.01]);
      this.play([1, , 551, 0.02, 0.11, 0.11, , 2.7, , -1, , , 0.07, , 3.2, , , 0.65, 0.12, , -656]);
    }
    preview() {
      this.play([0.3, , 313, 0.09, 0.21, 0.08, 1, 0.3, , 105, -168, 0.06, 0.07, , , 0.1, , 0.8, 0.21, 0.07, -1426]);
    }
    pick() {
      this.play([1.2, , 105, 0.01, 0.02, 0.04, 1, 1.1, 54, , 43, 0.5, , 0.1, 70, , , 0.8, 0.01, 0.01, 352]);
    }
    score(i) {
      const octave = Math.ceil(i / 7);
      const notes = [220, 246.9417, 261.6256, 293.6648, 329.6276, 349.2282, 391.9954];
      this.play([, , notes[i % 7] * octave, 0.02, 0.01, 0.07, 1, 0.4, , , 368, 0.05, , 0.3, , , , 0.7, 0.02]);
    }
    done() {
      this.play([2, , 650, 0.01, 0.28, 0.4, 1, 3.9, , , 209, 0.07, 0.08, , , , , 0.73, 0.24, 0.48, -520]);
      this.play([, , 380, 0.04, 0.21, 0.12, , 3.5, , , , , 0.02, , 4.6, , , 0.72, 0.19, 0.48]);
    }
    bad() {
      this.play([3, , 498, 0.04, 0.24, 0.32, , 2.9, , 8, -76, 0.06, 0.1, , 3.3, , , 0.88, 0.14, 0.43]);
      this.play([5, , 48, 0.05, 0.09, 0.69, 1, 2.7, 6, , , , 0.19, 1.2, 47, 0.6, 0.43, 0.46, 0.18, 0.34]);
    }
    appear() {
      this.play([0.9, , 443, 0.1, 0.18, 0.29, 1, 1.7, , , , , 0.09, , 3.3, 0.1, , 0.72, 0.18, , 172]);
    }
    multi() {
      this.play([0.8, , 347, 0.09, 0.13, 0.14, , 3.9, -1, , -154, 0.1, 0.06, , , , , 0.66, 0.2, 0.35, -1312]);
      this.play([0.8, , 431, 0.01, 0.03, 0.04, 1, 1.4, 61, , , , 0.03, , , , , 0.59, 0.03, 0.28, -1229]);
    }
    lose() {
      this.play([, , 614, 0.01, 0.24, 0.21, 1, 0.4, , , -132, 0.08, 0.08, , , 0.2, , 0.55, 0.11]);
      this.play([2, , 52, 0.04, 0.29, 0.46, 4, 3.2, 1, , , , , 1.6, 11, 0.3, , 0.38, 0.17, , 1135]);
    }
    meow() {
      this.play([0.3, , 390, 0.03, 0.2, 0.11, , 0.1, 50, -91, 410, 0.11, 0.07, 0.1, 0.8]);
      this.play([5, , 311, , , 6e-3, 1, 0.6, , , , , 0.05, , 1.1, , 0.47, 0.55, 0.38, 0.08, 728]);
    }
  };

  // src/engine/math.ts
  var clamp = (num, min, max) => {
    return Math.min(Math.max(num, min), max);
  };
  var clamp01 = (num) => {
    return clamp(num, 0, 1);
  };
  var moveTowards = (num, target, max) => {
    return num + (target > num ? Math.min(target - num, max) : Math.max(target - num, -max));
  };
  var lerp = (a, b, alpha, ease = (v) => v) => {
    return a + ease(alpha) * (b - a);
  };
  var asScore = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  // src/engine/vector.ts
  var ZERO = { x: 0, y: 0 };
  var normalize = (v, multi = 1) => {
    const m = magnitude(v);
    if (m == 0) return ZERO;
    return { x: v.x / m * multi, y: v.y / m * multi };
  };
  var distance = (a, b) => {
    const dx = Math.abs(a.x - b.x);
    const dy = Math.abs(a.y - b.y);
    return Math.sqrt(dx * dx + dy * dy);
  };
  var magnitude = (v) => {
    return Math.sqrt(v.x * v.x + v.y * v.y);
  };
  var lerp2 = (a, b, t, ease = (v) => v) => {
    return {
      x: a.x + ease(t) * (b.x - a.x),
      y: a.y + ease(t) * (b.y - a.y)
    };
  };
  var offset = (v, x, y) => {
    return {
      x: v.x + x,
      y: v.y + y
    };
  };

  // src/engine/easings.ts
  var quadEaseIn = (p) => p * p;
  var quadEaseInOut = (p) => p < 0.5 ? 2 * p * p : -2 * p * p + 4 * p - 1;
  var bounce = (p) => {
    if (p < 4 / 11) {
      return 121 * p * p / 16;
    } else if (p < 8 / 11) {
      return 363 / 40 * p * p - 99 / 10 * p + 17 / 5;
    } else if (p < 9 / 10) {
      return 4356 / 361 * p * p - 35442 / 1805 * p + 16061 / 1805;
    } else {
      return 54 / 5 * p * p - 513 / 25 * p + 268 / 25;
    }
  };

  // src/engine/tween.ts
  var Tween = class {
    constructor(entity) {
      this.entity = entity;
      this.time = 0;
      this.type = "none";
      this.easeFn = (val) => bounce(val);
    }
    isActive() {
      return this.active;
    }
    scale(target, duration) {
      this.type = "scale";
      const p = this.entity.scale;
      this.start = { x: p.x, y: p.y };
      this.startTween(target, duration);
    }
    move(target, duration) {
      this.type = "move";
      const p = this.entity.p;
      this.start = { x: p.x, y: p.y };
      this.startTween(target, duration);
    }
    // public rotate(target: number, duration: number): void {
    //     this.type = 'rotate';
    //     const rot = this.entity.rotation;
    //     this.start = { x: rot, y: rot };
    //     this.startTween({ x: target, y: target }, duration);
    // }
    setEase(ease) {
      this.easeFn = ease;
    }
    startTween(target, duration) {
      this.target = target;
      this.duration = duration * 1e3;
      this.active = true;
      this.startTime = -1;
    }
    stop() {
      this.type == "none";
      this.active = false;
    }
    update(tick2) {
      if (this.startTime < 0 || this.type == "none") {
        this.startTime = tick2;
        return;
      }
      if (!this.active) return;
      this.time = clamp01((tick2 - this.startTime) / this.duration);
      if (!this.start || !this.target) return;
      const p = lerp2(this.start, this.target, this.time, this.easeFn);
      if (this.type == "move") this.entity.p = { x: p.x, y: p.y };
      if (this.type == "scale") this.entity.scale = { x: p.x, y: p.y };
      this.active = this.time < 1;
    }
    static run(fn, duration = 1e3) {
      for (let i = 0; i < 1; i += 0.01) {
        setTimeout(() => fn(i), i * duration);
      }
    }
  };

  // src/engine/entity.ts
  var Entity = class {
    constructor(game2, x, y, width, height) {
      this.game = game2;
      this.scale = { x: 1, y: 1 };
      this.d = 0;
      this.rotation = 0;
      this.animationOffset = 0;
      this.previousTick = 0;
      this.animationPhase = 0;
      this.animationPhaseAbs = 0;
      this.animationSpeed = 5e-3;
      this.delta = 0;
      this.p = { x, y };
      this.s = { x: width, y: height };
      this.tween = new Tween(this);
      this.animationOffset = Math.random();
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    update(tick2, mouse2) {
      this.delta = tick2 - this.previousTick;
      this.previousTick = tick2;
      this.tween.update(tick2);
      this.animationPhase = Math.sin(tick2 * this.animationSpeed + this.animationOffset);
      this.animationPhaseAbs = Math.abs(this.animationPhase);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    draw(ctx2) {
    }
    getCenter() {
      return {
        x: this.p.x + this.s.x * 0.5,
        y: this.p.y + this.s.y * 0.5
      };
    }
    setPosition(x, y) {
      this.p = { x, y };
    }
    isInside(point, radius = 0) {
      const c = this.getCenter();
      return point.x > c.x - this.s.x * 0.5 * this.scale.x - radius * 0.5 && point.x < c.x + this.s.x * 0.5 * this.scale.x + radius * 0.5 && point.y > c.y - this.s.y * 0.5 * this.scale.y - radius * 0.5 && point.y < c.y + this.s.y * 0.5 * this.scale.y + radius * 0.5;
    }
    drawWithTranslate(ctx2) {
      ctx2.save();
      ctx2.translate(this.p.x, this.p.y);
      this.draw(ctx2);
      ctx2.restore();
    }
  };

  // src/view.ts
  var view = {
    portrait: false,
    width: 800,
    height: 400,
    // visible logical bounds (can extend beyond 0..width / 0..height)
    left: 0,
    top: 0,
    right: 800,
    bottom: 400
  };

  // src/engine/blinders.ts
  var Blinders = class extends Entity {
    constructor(game2, delay = 0) {
      super(game2, 0, 0, 0, 0);
      this.d = 500;
      setTimeout(() => this.open(), delay);
    }
    open(after = () => {
    }) {
      this.tween.scale({ x: 0, y: 0 }, 0.5);
      setTimeout(after, 500);
    }
    close(after = () => {
    }) {
      this.tween.scale({ x: 1, y: 1 }, 0.4);
      setTimeout(after, 500);
    }
    draw(ctx2) {
      ctx2.fillStyle = "#000";
      const x = view.left;
      const w = view.right - view.left;
      const y = view.top - 10;
      const h = view.bottom - view.top + 20;
      ctx2.fillRect(x - 10, y, w * 0.55 * this.scale.x + 10, h);
      ctx2.fillRect(x + w - w * 0.55 * this.scale.x, y, w * 0.55 * this.scale.x + 10, h);
    }
  };

  // src/engine/random.ts
  var random = (min = 0, max = 1) => {
    return min + Math.random() * (max - min);
  };
  var randomInt = (min, max) => {
    return min + Math.floor(Math.random() * (max - min + 1));
  };
  var randomCell = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };
  var randomSorter = () => Math.random() < 0.5 ? 1 : -1;
  var plusMinus = randomSorter;

  // src/engine/camera.ts
  var Camera = class {
    constructor() {
      this.offset = ZERO;
      this.rotation = 0;
      this.zoom = 1;
      this.pan = ZERO;
      this.shift = 0;
      this.shakeStrength = 0;
      this.shakeRotation = 0;
    }
    shake(amount, duration, rotation = 0) {
      this.shakeStrength = amount;
      this.shakeRotation = rotation / 360 * Math.PI;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.reset(), duration * 1e3);
    }
    update() {
      this.offset = {
        x: random(-this.shakeStrength, this.shakeStrength),
        y: random(-this.shakeStrength, this.shakeStrength)
      };
      this.rotation = random(-this.shakeRotation, this.shakeRotation);
    }
    reset() {
      this.shakeStrength = 0;
      this.shakeRotation = 0;
    }
  };

  // src/engine/game.ts
  var Game = class extends Entity {
    constructor(audio2, canvas2) {
      super(null, 0, 0, 0, 0);
      this.audio = audio2;
      this.canvas = canvas2;
      this.camera = new Camera();
      this.blinders = new Blinders(this, 400);
    }
    click(mouse2) {
      var _a;
      this.usingPad = false;
      (_a = this.scene) == null ? void 0 : _a.getButtons().forEach((b) => {
        if (b.visible && b.isInside(mouse2)) b.trigger();
      });
    }
    getMouse() {
      return this.curMouse;
    }
    update(tick2, mouse2) {
      var _a;
      super.update(tick2, mouse2);
      (_a = this.scene) == null ? void 0 : _a.update(tick2, mouse2);
      this.camera.update();
      this.blinders.update(tick2, mouse2);
      mouse2.pressing = false;
      this.curMouse = { ...mouse2 };
    }
    draw(ctx2) {
      var _a, _b;
      ctx2.fillStyle = (_a = this.scene) == null ? void 0 : _a.getBgColor();
      ctx2.fillRect(view.left - 20, view.top - 20, view.right - view.left + 40, view.bottom - view.top + 40);
      ctx2.save();
      ctx2.rotate(this.camera.rotation);
      ctx2.scale(this.camera.zoom, this.camera.zoom);
      ctx2.translate(this.camera.offset.x - this.camera.pan.x + this.camera.shift, this.camera.offset.y + this.camera.pan.y);
      (_b = this.scene) == null ? void 0 : _b.draw(ctx2);
      ctx2.restore();
      this.blinders.draw(ctx2);
    }
    changeScene(scene) {
      this.blinders.close(() => {
        var _a;
        (_a = this.scene) == null ? void 0 : _a.end();
        this.scene = scene;
        scene.ratioChanged(view.portrait);
        this.blinders.open();
      });
    }
    getBlinders() {
      return this.blinders;
    }
  };

  // src/engine/drawing.ts
  var drawCircle = (ctx2, pos, radius, color, stroke) => {
    drawEllipse(ctx2, pos, radius, radius, color, stroke);
  };
  var drawEllipse = (ctx2, pos, x, y, color, stroke) => {
    ctx2.beginPath();
    if (color) ctx2.fillStyle = color;
    ctx2.ellipse(pos.x, pos.y, x, y, 0, 0, Math.PI * 2);
    ctx2.fill();
    if (stroke) {
      ctx2.strokeStyle = stroke;
      ctx2.stroke();
    }
  };
  var fillRect = (ctx2, x, y, w, h) => {
    ctx2.fillRect(x - w * 0.5, y - h * 0.5, w, h);
  };

  // src/engine/eye.ts
  var Eye = class extends Entity {
    constructor(game2, x, y, size) {
      super(game2, x, y, size, size);
      this.openess = 1;
      this.targetOpeness = 1;
      this.color = "#fff";
    }
    update(tick2, mouse2) {
      super.update(tick2, mouse2);
      this.openess = moveTowards(this.openess, this.targetOpeness, 0.075);
    }
    getColor() {
      return this.color;
    }
    setColor(color) {
      this.color = color;
    }
    setSize(size) {
      this.s = { x: size, y: size };
    }
    draw(ctx2, sleeping) {
      const prev = ctx2.globalCompositeOperation;
      ctx2.globalCompositeOperation = "source-over";
      ctx2.fillStyle = this.color;
      if (!sleeping) drawEllipse(ctx2, this.p, this.s.x * Math.min(1.1, 1 / this.openess), this.s.y * this.openess, this.color);
      if (sleeping) fillRect(ctx2, this.p.x, this.p.y + 6, 20, 7);
      ctx2.globalCompositeOperation = prev;
    }
    blink(blinkDuration) {
      clearTimeout(this.timer);
      this.targetOpeness = 0;
      this.timer = setTimeout(() => this.open(), blinkDuration);
    }
    open() {
      this.targetOpeness = 1;
    }
  };

  // src/engine/face.ts
  var defaultOptions = {
    blush: "#FE6847",
    eyeSize: 10,
    width: 1,
    blinkDiff: 150,
    blinkDuration: 200,
    blushSize: 1.3,
    mouthWidth: 1,
    mouthThickness: 7,
    blushOffset: 0,
    color: "#fff",
    mouthColor: "#fff"
  };
  var Face = class extends Entity {
    constructor(game2, options) {
      super(game2, 0, 0, 0, 0);
      // public thinking: boolean;
      this.openess = 0;
      this.targetOpeness = 0;
      this.mirrorer = 1;
      this.options = { ...defaultOptions };
      this.setOptions(options);
      this.blink(this.options.blinkDuration, this.options.blinkDiff);
      this.left = new Eye(game2, -30 * this.options.width, 5, this.options.eyeSize);
      this.right = new Eye(game2, 30 * this.options.width, 5, this.options.eyeSize);
    }
    getOptions() {
      return this.options;
    }
    setOptions(options) {
      var _a, _b;
      this.options = {
        ...this.options,
        ...options
      };
      (_a = this.left) == null ? void 0 : _a.setColor(options.color);
      (_b = this.right) == null ? void 0 : _b.setColor(options.color);
    }
    blink(blinkDuration, blinkDiff) {
      if (this.options.noBlink) return;
      setTimeout(() => this.blinkEye(this.left, blinkDuration, blinkDiff), random(0, blinkDiff));
      setTimeout(() => this.blinkEye(this.right, blinkDuration, blinkDiff), random(0, blinkDiff));
      setTimeout(() => this.blink(blinkDuration, blinkDiff), random(1e3, 4e3));
    }
    blinkEye(eye, duration, diff) {
      if (this.options.noBlink) return;
      eye.blink(duration), random(0, diff);
    }
    update(tick2, mouse2) {
      super.update(tick2, mouse2);
      this.openess = moveTowards(this.openess, this.targetOpeness, 0.1);
      this.left.update(tick2, mouse2);
      this.right.update(tick2, mouse2);
      if (Math.random() < 2e-3) this.mirrorer *= -1;
    }
    setEyeSize(size) {
      this.left.setSize(size);
      this.right.setSize(size);
    }
    setEyeColor(color) {
      this.left.setColor(color);
      this.right.setColor(color);
    }
    getEyeColor() {
      return this.left.getColor();
    }
    draw(ctx2, drawBrows = true) {
      drawEllipse(ctx2, { x: -65 * this.options.width - this.options.blushOffset, y: 20 }, 15 * this.options.blushSize, 10 * this.options.blushSize, this.options.blush);
      drawEllipse(ctx2, { x: 65 * this.options.width + this.options.blushOffset, y: 20 }, 15 * this.options.blushSize, 10 * this.options.blushSize, this.options.blush);
      ctx2.fillStyle = "#000";
      this.left.draw(ctx2, this.sleeping);
      this.right.draw(ctx2, this.sleeping);
      ctx2.lineCap = "round";
      ctx2.lineJoin = "round";
      ctx2.lineWidth = this.options.mouthThickness;
      ctx2.strokeStyle = this.options.color;
      ctx2.fillStyle = this.options.color;
      if (this.angry && drawBrows) {
        ctx2.beginPath();
        ctx2.moveTo(-50 * this.options.width + 10, -5);
        ctx2.lineTo(-50 * this.options.width - 20, -20);
        ctx2.stroke();
        ctx2.beginPath();
        ctx2.moveTo(50 * this.options.width - 10, -5);
        ctx2.lineTo(50 * this.options.width + 20, -20);
        ctx2.stroke();
      }
      ctx2.save();
      ctx2.scale(this.mirrorer, 1);
      ctx2.beginPath();
      ctx2.strokeStyle = this.options.mouthColor;
      const mw = this.options.width * this.options.mouthWidth;
      const curve = this.angry ? -30 : 0;
      if (this.options.animal) {
        const start = 30;
        ctx2.save();
        ctx2.translate(0, 5);
        ctx2.lineWidth = this.options.mouthThickness * 0.01;
        ctx2.beginPath();
        ctx2.moveTo(-40 * mw, start);
        ctx2.quadraticCurveTo(-10, 40 + 10 * mw, 0, 15);
        ctx2.quadraticCurveTo(10, 40 + 10 * mw, 40 * mw, start);
        ctx2.restore();
      } else {
        const start = 20;
        ctx2.moveTo(-40 * mw, start);
        ctx2.quadraticCurveTo(0, 40 - 60 * mw * this.openess + curve, 40 * mw, 20);
        ctx2.quadraticCurveTo(0, 40 + 60 * mw * this.openess + curve, -40 * mw, start);
      }
      ctx2.stroke();
      ctx2.fill();
      ctx2.restore();
    }
    openMouth(amount, closeDelay) {
      clearTimeout(this.closeTimer);
      this.targetOpeness = amount;
      this.closeTimer = setTimeout(() => this.closeMouth(), closeDelay * 1e3);
    }
    closeMouth() {
      this.targetOpeness = 0;
    }
    setColor(color) {
      this.options.color = color;
      this.left.setColor(color);
      this.right.setColor(color);
    }
    setBlushColor(color) {
      this.options.blush = color;
    }
  };

  // src/cat.ts
  var catPathLandscape = [
    { x: 900, y: 320 },
    { x: 700, y: 320 },
    { x: 500, y: 300 },
    { x: 400, y: 220 }
  ];
  var catPathPortrait = [
    { x: 500, y: 200 },
    { x: 350, y: 250 },
    { x: 300, y: 300 },
    { x: 200, y: 380 }
  ];
  var Cat = class extends Entity {
    constructor(game2, x, y) {
      super(game2, x, y, 0, 0);
      this.rise = 1;
      this.animationSpeed = 3e-3;
      this.face = new Face(game2, { width: 0.8, animal: true });
      this.d = 100;
      this.tween.setEase(quadEaseInOut);
      this.animationSpeed *= random(0.8, 1.2);
    }
    update(tick2, mouse2) {
      super.update(tick2, mouse2);
      this.rise = clamp01(this.rise + (this.sleeping ? -1 : 1) * this.delta * 0.01);
      if (!this.sleeping) this.face.update(tick2, mouse2);
    }
    sleep(state = true) {
      this.sleeping = state;
      this.face.sleeping = state;
    }
    draw(ctx2) {
      ctx2.save();
      ctx2.translate(this.p.x, this.p.y);
      drawEllipse(ctx2, { x: 0, y: 1 }, 17, 5, "#00000055");
      ctx2.strokeStyle = "#000";
      ctx2.lineCap = "round";
      const sway = this.sleeping ? 0 : this.animationPhase;
      const breath = this.sleeping ? this.animationPhase : 0;
      ctx2.scale(1 - breath * 0.1, 1 + breath * 0.1);
      const air = quadEaseIn(Math.sin(this.tween.time * Math.PI));
      ctx2.translate(0, air * -40);
      const drawLeg = (pos, len) => {
        ctx2.lineWidth = 2;
        ctx2.beginPath();
        ctx2.moveTo(pos, -3 - this.animationPhaseAbs * 6);
        ctx2.quadraticCurveTo(pos * 1.4, -2 - this.animationPhaseAbs * 3, pos, 1 + len);
        ctx2.stroke();
      };
      if (!this.sleeping) {
        drawLeg(10, 0);
        drawLeg(-10, 0);
        drawLeg(6, 1);
        drawLeg(-6, 1);
      }
      ctx2.lineWidth = 20;
      ctx2.beginPath();
      ctx2.translate(0, -7 - Math.abs(sway) * 3 - air * 5 - this.rise * 3);
      ctx2.moveTo(-5, 0);
      ctx2.lineTo(5, 0);
      ctx2.stroke();
      ctx2.translate(sway * 2, 0);
      ctx2.lineWidth = 5;
      ctx2.moveTo(0, 0);
      ctx2.quadraticCurveTo(-this.animationPhase * 25, -5, -sway * 12, -20 - this.animationPhaseAbs * 5);
      if (!this.sleeping) ctx2.stroke();
      const drawEar = (dir) => {
        ctx2.fillStyle = "#000";
        ctx2.beginPath();
        ctx2.moveTo(dir * 7, -15);
        ctx2.lineTo(dir * 5 - 5, 0);
        ctx2.lineTo(dir * 5 + 5, 0);
        ctx2.fill();
      };
      drawEar(-1);
      drawEar(1);
      ctx2.translate(0, -2 - sway - air * 3 - breath * 2);
      ctx2.scale(0.13, 0.13);
      this.face.draw(ctx2, false);
      ctx2.restore();
    }
    hop(to) {
      if (this.sleeping) this.game.audio.meow();
      this.sleep(false);
      this.moved = true;
      this.tween.move(to, 0.4);
      this.game.audio.jump();
      setTimeout(() => this.game.audio.land(), 380);
    }
    isAwake() {
      return !this.sleeping;
    }
  };

  // src/colors.ts
  var COLORS = {
    bg: "#57B8FF",
    dark: "#2176AE",
    red: "#FE6847",
    mark: "#FBB13C",
    green: "#82CC32",
    blackish: "#0D2E45"
  };

  // src/common.ts
  var drawBg = (ctx2) => {
    ctx2.fillStyle = COLORS.bg;
    ctx2.fillRect(view.left - 100, view.top - 100, view.right - view.left + 200, view.bottom - view.top + 200);
    ctx2.strokeStyle = COLORS.dark;
    ctx2.setLineDash([0, 53]);
    ctx2.lineDashOffset = 5;
    ctx2.lineWidth = 60;
    ctx2.lineCap = "round";
    const w = view.width;
    const h = view.height;
    const left = Math.min(-100, view.left - 60);
    const right = Math.max(w + 100, view.right + 60);
    const drawLine = (h2, dip) => {
      ctx2.beginPath();
      ctx2.moveTo(left, dip);
      ctx2.quadraticCurveTo(w / 2, h2, right, dip);
      ctx2.stroke();
    };
    drawLine(h + 20, h - 20);
    drawLine(0, 80);
    drawLine(0, 45);
    drawLine(0, 10);
    ctx2.setLineDash([]);
  };

  // src/engine/constants.ts
  var font = "Arial Black, HelveticaNeue-CondensedBlack, Arial, sans-serif";

  // src/engine/button.ts
  var BORDER_THICKNESS = 7;
  var ButtonEntity = class extends Entity {
    constructor(game2, content, x, y, width, height, onClick, audio2, fontSize = 30) {
      super(game2, x - width * 0.5, y - height * 0.5, width, height);
      this.content = content;
      this.onClick = onClick;
      this.audio = audio2;
      this.fontSize = fontSize;
      this.visible = true;
      this.hoverRise = 5;
      this.clickOffset = { x: 0, y: 0 };
      this.contentColor = "#000";
      this.borderThickness = BORDER_THICKNESS;
      this.animationSpeed = 25e-4;
    }
    isHovered() {
      return this.hovered;
    }
    setClickOffset(offset2) {
      this.clickOffset = offset2;
    }
    setHoverRise(val) {
      this.hoverRise = val;
    }
    trigger() {
      this.audio.button();
      this.onClick();
    }
    makeFrameless() {
      this.frameless = true;
    }
    getText() {
      return this.content;
    }
    getCenter() {
      return {
        x: this.p.x + this.s.x * 0.5 + this.clickOffset.x,
        y: this.p.y + this.s.y * 0.5 + this.clickOffset.y
      };
    }
    update(tick2, mouse2) {
      if (!this.visible) return;
      const wasHovered = this.hovered;
      this.hovered = !mouse2.dragging && this.isInside(mouse2) && !this.game.usingPad;
      if (!wasHovered && this.hovered) this.hover();
      if (!mouse2.pressing) {
        if (this.pressed && !mouse2.dragging && this.hovered) {
        }
        this.pressed = false;
      }
      super.update(tick2, mouse2);
      if (this.hovered && mouse2.pressing && !this.pressed && !mouse2.dragging) {
        this.pressed = true;
        return;
      }
    }
    draw(ctx2) {
      if (!this.visible) return;
      ctx2.save();
      ctx2.translate(0, this.hovered ? -this.hoverRise : 0 + this.animationPhaseAbs * 3);
      ctx2.fillStyle = ctx2.strokeStyle = "#000";
      ctx2.fillRect(this.p.x, this.p.y, this.s.x, this.s.y);
      ctx2.fillStyle = this.hovered ? "#FE6847" : "#fff";
      const drawEar = (pos) => {
        ctx2.beginPath();
        ctx2.moveTo(pos - 15, this.p.y + 10);
        ctx2.lineTo(pos, this.p.y - 10);
        ctx2.lineTo(pos + 15, this.p.y + 10);
        ctx2.stroke();
        ctx2.fill();
      };
      const drawWhisker = (dir, height) => {
        ctx2.moveTo(this.p.x + this.s.x * 0.5 + dir * this.s.x * 0.5 - 10 * dir, this.p.y + height * this.s.y);
        ctx2.lineTo(this.p.x + this.s.x * 0.5 + dir * this.s.x * 0.5 + 15 * dir, this.p.y + height * this.s.y);
      };
      ctx2.lineWidth = this.borderThickness * 1.75;
      drawEar(this.p.x + this.s.x * 0.2);
      drawEar(this.p.x + this.s.x * 0.8);
      ctx2.lineCap = "round";
      ctx2.lineWidth = this.borderThickness * 1;
      ctx2.beginPath();
      drawWhisker(1, 0.5);
      drawWhisker(1, 0.65);
      drawWhisker(1, 0.8);
      drawWhisker(-1, 0.5);
      drawWhisker(-1, 0.65);
      drawWhisker(-1, 0.8);
      ctx2.stroke();
      ctx2.fillRect(this.p.x + this.borderThickness, this.p.y + this.borderThickness, this.s.x - this.borderThickness * 2, this.s.y - this.borderThickness * 2);
      ctx2.font = `bold ${this.fontSize}px ${font}`;
      ctx2.textBaseline = "alphabetic";
      ctx2.textAlign = "center";
      ctx2.fillStyle = this.contentColor;
      ctx2.strokeStyle = "#000";
      ctx2.lineWidth = 6;
      if (this.strokeText) ctx2.strokeText(this.content, this.p.x + this.s.x * 0.5, this.p.y + this.s.y * 0.5 + this.fontSize * 0.3);
      ctx2.fillText(this.content, this.p.x + this.s.x * 0.5, this.p.y + this.s.y * 0.5 + this.fontSize * 0.3);
      ctx2.restore();
    }
    hover() {
      this.audio.buttonHover();
      if (this.onHover) this.onHover();
    }
  };

  // src/engine/container.ts
  var Container = class extends Entity {
    constructor(game2, x = 0, y = 0, entities = []) {
      super(game2, x, y, 0, 0);
      this.children = [];
      this.children.push(...entities);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ratioChanged(portrait) {
    }
    getBgColor() {
      return "#57B8FF";
    }
    update(tick2, mouse2) {
      super.update(tick2, mouse2);
      this.children.forEach((c) => c.update(tick2, mouse2));
      if (this.children.some((c) => c.dead)) {
        this.children = this.children.filter((c) => !c.dead);
      }
    }
    hide(duration = 0.3) {
      this.tween.scale({ x: 0, y: 0 }, duration);
    }
    show(duration = 0.3) {
      this.tween.scale({ x: 1, y: 1 }, duration);
    }
    draw(ctx2) {
      ctx2.save();
      [...this.children].sort((a, b) => a.d - b.d).forEach((c) => c.draw(ctx2));
      ctx2.restore();
    }
    getChild(index) {
      return this.children[index];
    }
    getChildren() {
      return this.children;
    }
    add(...entity) {
      this.children.push(...entity);
    }
    clear() {
      this.children = [];
    }
    getButtons() {
      return [];
    }
    end() {
    }
  };

  // src/engine/particle.ts
  var Particle = class extends Entity {
    constructor(game2, x, y, width, height, life, velocity) {
      super(game2, x, y, width, height);
      this.life = life;
      this.velocity = velocity;
      this.ratio = 1;
      this.start = -1;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    update(tick2, mouse2) {
      if (this.dead || this.life < 0) return;
      this.p = {
        x: this.p.x + this.velocity.x,
        y: this.p.y + this.velocity.y
      };
      this.ratio = 1 - (tick2 - this.start) / (this.life * 1e3);
      if (this.start < 0) this.start = tick2;
      if (tick2 - this.start > this.life * 1e3) {
        this.dead = true;
      }
    }
  };

  // src/engine/text.ts
  var TextEntity = class extends Particle {
    constructor(game2, content, fontSize, x, y, life, velocity, options) {
      super(game2, x, y, 0, 0, life, velocity);
      this.content = content;
      this.fontSize = fontSize;
      this.options = options;
    }
    draw(ctx2) {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      ctx2.save();
      ctx2.rotate((_b = (_a = this.options) == null ? void 0 : _a.angle) != null ? _b : 0);
      const mod = ((_c = this.options) == null ? void 0 : _c.scales) ? this.ratio : 1;
      ctx2.font = `bold ${this.fontSize * mod}px ${font}`;
      ctx2.textAlign = (_e = (_d = this.options) == null ? void 0 : _d.align) != null ? _e : "center";
      if ((_f = this.options) == null ? void 0 : _f.shadow) {
        ctx2.fillStyle = "#000";
        ctx2.fillText(this.content, this.p.x + this.options.shadow, this.p.y + this.options.shadow);
      }
      ctx2.fillStyle = (_h = (_g = this.options) == null ? void 0 : _g.color) != null ? _h : "#fff";
      ctx2.fillText(this.content, this.p.x, this.p.y);
      ctx2.restore();
    }
    // public setColor(color: string): void {
    //     this.options.color = color;
    // }
    getWidth(ctx2) {
      var _a;
      const mod = ((_a = this.options) == null ? void 0 : _a.scales) ? this.ratio : 1;
      ctx2.font = `bold ${this.fontSize * mod}px ${font}`;
      return Math.max(...this.content.split("\n").map((t) => ctx2.measureText(t).width));
    }
    setOptions(opts) {
      this.options = { ...this.options, ...opts };
    }
  };

  // src/engine/wobbly.ts
  var WobblyText = class extends TextEntity {
    constructor(game2, content, fontSize, x, y, frequency, amplitude, options) {
      super(game2, content, fontSize, x, y, -1, ZERO, options);
      this.frequency = frequency;
      this.amplitude = amplitude;
      this.time = 0;
      this.mirrors = [];
      this.scrambled = false;
      this.font = font;
      this.scale = { x: 1, y: 1 };
    }
    update(tick2, mouse2) {
      super.update(tick2, mouse2);
      this.tween.update(tick2);
      this.time = tick2;
    }
    toggle(text) {
      clearTimeout(this.timer);
      const dur = random(0.2, 0.5);
      this.timer = setTimeout(() => {
        this.content = text;
        this.scramble(this.scrambled);
      }, text ? 0 : dur * 1e3);
      const s = text ? 1 : 0;
      this.tween.scale({ x: s, y: s }, dur);
    }
    draw(ctx2) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      ctx2.save();
      ctx2.rotate((_b = (_a = this.options) == null ? void 0 : _a.angle) != null ? _b : 0);
      this.ratio = clamp01(this.scale.x);
      const mod = ((_c = this.options) == null ? void 0 : _c.scales) ? this.ratio : 1;
      ctx2.textAlign = "left";
      ctx2.font = `bold ${this.fontSize * mod}px ${font}`;
      const spacing = (_e = (_d = this.options) == null ? void 0 : _d.spacing) != null ? _e : 0;
      const w = this.getWidth(ctx2);
      this.width = w;
      ctx2.lineJoin = "round";
      let useColor = false;
      if ((_f = this.options) == null ? void 0 : _f.background) {
        ctx2.fillStyle = this.options.background;
        ctx2.beginPath();
        ctx2.rect(this.p.x - w * 0.5 - 15, this.p.y - 30, w + 30, 47);
        ctx2.fill();
        if ((_g = this.options) == null ? void 0 : _g.border) {
          ctx2.strokeStyle = this.options.border;
          ctx2.lineWidth = (_h = this.options.borderWidth) != null ? _h : 1;
          ctx2.stroke();
        }
      }
      let offset2 = (((_i = this.options) == null ? void 0 : _i.align) === "center" || !((_j = this.options) == null ? void 0 : _j.align) ? -w * 0.5 : 0) - this.content.replace(/\|/g, "").length * spacing * 0.5;
      if (((_k = this.options) == null ? void 0 : _k.align) == "right") offset2 = -w;
      let i = 0;
      ctx2.translate(this.p.x + offset2, this.p.y);
      this.content.split("").forEach((letter) => {
        var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
        if (letter === "|") {
          useColor = !useColor;
          return;
        }
        const mx = (_b2 = (_a2 = this.mirrors[i]) == null ? void 0 : _a2.x) != null ? _b2 : 1;
        const my = (_d2 = (_c2 = this.mirrors[i]) == null ? void 0 : _c2.y) != null ? _d2 : 1;
        const metrics = ctx2.measureText(letter);
        const w2 = metrics.width;
        const h = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent * 0.5;
        ctx2.save();
        ctx2.translate(w2 * 0.5, -h * 0.5);
        ctx2.scale(mx, my);
        ctx2.translate(-w2 * 0.5, h * 0.5);
        if ((_e2 = this.options) == null ? void 0 : _e2.shadow) {
          ctx2.fillStyle = "#000";
          ctx2.fillText(letter, spacing * i * mx + this.options.shadow * mx, this.options.shadow * my + Math.sin(this.time * 5e-3 + i * this.frequency) * this.amplitude * my);
        }
        ctx2.fillStyle = useColor ? "#FBB13C" : (_g2 = (_f2 = this.options) == null ? void 0 : _f2.color) != null ? _g2 : "#fff";
        if ((_h2 = this.options) == null ? void 0 : _h2.outline) {
          ctx2.strokeStyle = "#000";
          ctx2.lineWidth = this.options.outline * this.ratio;
          ctx2.strokeText(letter, spacing * i * mx, Math.sin(this.time * 5e-3 + i * this.frequency) * this.amplitude * my);
        }
        ctx2.fillText(letter, spacing * i * mx, Math.sin(this.time * 5e-3 + i * this.frequency) * this.amplitude * my);
        ctx2.restore();
        ctx2.translate(w2, 0);
        i++;
      });
      ctx2.restore();
    }
    setFont(to) {
      this.font = to;
    }
    scramble(state = true) {
      this.scrambled = state;
      this.mirrors = state ? this.content.replace(/\|/g, "").split("").map(() => ({ x: plusMinus(), y: plusMinus() })) : [];
    }
    getPrevWidth() {
      return this.width;
    }
    getWidth(ctx2) {
      var _a;
      const mod = ((_a = this.options) == null ? void 0 : _a.scales) ? this.ratio : 1;
      ctx2.font = `bold ${this.fontSize * mod}px ${this.font}`;
      return Math.max(...this.content.split("\n").map((t) => ctx2.measureText(t.replace(/\|/g, "")).width));
    }
    setSize(size, shadow) {
      this.fontSize = size;
      this.options.shadow = shadow;
    }
  };

  // src/bg.ts
  var SkillBg = class extends Entity {
    constructor(game2) {
      super(game2, -50, 290, 900, 370);
    }
    draw(ctx2) {
      if (!this.visible) return;
      ctx2.fillStyle = "#00000088";
      ctx2.fillRect(this.p.x, this.p.y, this.s.x, this.s.y);
    }
  };

  // src/engine/line.ts
  var LineParticle = class extends Particle {
    constructor(game2, from, to, life, width, color, midOffset = 0) {
      super(game2, 0, 0, 0, 0, life, ZERO);
      this.from = from;
      this.to = to;
      this.width = width;
      this.color = color;
      this.midOffset = midOffset;
      this.hDir = Math.random() < 0.5 ? 1 : -1;
      this.vDir = Math.random() < 0.5 ? 1 : -1;
      this.half = 0.25 + Math.random() * 0.5;
    }
    draw(ctx2) {
      ctx2.beginPath();
      if (this.ratio < 0.2) return;
      ctx2.lineWidth = this.width * this.ratio;
      ctx2.lineCap = "butt";
      ctx2.strokeStyle = this.color;
      ctx2.moveTo(this.from.x, this.from.y);
      if (this.midOffset) {
        const mid = {
          x: this.from.x * this.half + this.to.x * (1 - this.half),
          y: this.from.y * this.half + this.to.y * (1 - this.half)
        };
        const m1 = offset(mid, this.midOffset * this.hDir, this.midOffset * this.vDir);
        const m2 = offset(mid, -this.midOffset * this.hDir, this.midOffset * this.vDir);
        ctx2.lineTo(m1.x, m1.y);
        ctx2.lineTo(m2.x, m2.y);
      }
      ctx2.lineTo(this.to.x, this.to.y);
      ctx2.stroke();
    }
  };

  // src/life.ts
  var Life = class extends Entity {
    constructor(game2, x, y, w, h) {
      super(game2, x, y, w, h);
      this.amount = 9;
      this.text = new TextEntity(game2, "LIVES:", 15, 0, 15, -1, ZERO, { shadow: 2.2, align: "left" });
    }
    change(amount) {
      if (this.amount === 0) return;
      this.amount = clamp(this.amount + amount, 0, 9);
    }
    equals(val) {
      return this.amount === val;
    }
    isDead() {
      return this.amount <= 0;
    }
    changeSize(portrait) {
      this.s = portrait ? { x: 380 - this.getWidth(), y: 20 } : { x: 200, y: 20 };
    }
    getWidth() {
      const ctx2 = this.game.canvas.getContext("2d");
      ctx2.font = `bold 15px ${font}`;
      return ctx2.measureText(this.text.content).width + 7;
    }
    draw(ctx2) {
      ctx2.save();
      ctx2.lineWidth = 2;
      ctx2.translate(this.p.x, this.p.y);
      this.text.draw(ctx2);
      ctx2.translate(this.getWidth(), 0);
      ctx2.fillStyle = "#000";
      ctx2.strokeStyle = "#fff";
      ctx2.beginPath();
      ctx2.rect(0, 0, this.s.x, this.s.y);
      ctx2.fill();
      ctx2.stroke();
      ctx2.beginPath();
      ctx2.fillStyle = COLORS.red;
      const inset = 6;
      ctx2.translate(inset, inset);
      ctx2.scale(Math.max(0, this.amount / 9), 1);
      ctx2.rect(0, 0, this.s.x - inset * 2, this.s.y - inset * 2);
      ctx2.fill();
      ctx2.restore();
    }
  };

  // src/engine/pulser.ts
  var Pulser = class {
    constructor() {
      this.ratio = 0;
      this.phase = 0;
      this.speed = 1;
    }
    update(delta) {
      this.phase = Math.max(0, this.phase - delta * this.speed);
      this.ratio = Math.sin(this.phase * Math.PI);
    }
    pulse(speed = 1) {
      this.speed = speed;
      this.phase = 1;
    }
  };

  // src/multiplier.ts
  var Multiplier = class extends Container {
    constructor(game2, x, y) {
      super(game2, x, y);
      this.dropRate = 1;
      this.ratio = 0;
      this.pulser = new Pulser();
      this.animationSpeed = 2e-3;
      this.text = new TextEntity(game2, "foo", 40, 25, 13, -1, ZERO, { shadow: 3, align: "right" });
      this.add(this.text);
    }
    reset(val) {
      this.ratio = 0;
      this.value = val;
      this.text.content = `x${this.value}`;
      this.pulser.pulse();
    }
    update(tick2, mouse2) {
      super.update(tick2, mouse2);
      this.pulser.update(this.delta * 75e-4);
      if (this.paused) return;
      this.ratio = clamp01(this.ratio + this.delta * 13e-5 * this.dropRate);
      if (this.ratio > 0.99 && this.value > 1) {
        this.reset(this.value - 1);
        this.ratio = 0;
        this.game.audio.multi();
        this.pulser.pulse();
      }
    }
    draw(ctx2) {
      ctx2.save();
      ctx2.translate(this.p.x, this.p.y);
      ctx2.scale(1 + this.pulser.ratio * 0.2, 1 + this.pulser.ratio * 0.2);
      if (this.value > 1) {
        ctx2.beginPath();
        ctx2.fillStyle = "#000";
        ctx2.moveTo(0, 0);
        ctx2.arc(0, 0, 28, -Math.PI * 0.5, -Math.PI * 0.5 + Math.PI * 2 * this.ratio, true);
        ctx2.closePath();
        ctx2.fill();
      }
      super.draw(ctx2);
      ctx2.restore();
    }
  };

  // src/pop.ts
  var TextPop = class extends TextEntity {
    constructor(game2, text, pos, color, size = 30) {
      super(game2, text, size, pos.x, pos.y, random(0.7, 0.9), { x: 0, y: random(-0.5, -0.7) }, { shadow: 3, scales: true });
      this.options.color = color;
      this.d = 200;
    }
    update(tick2, mouse2) {
      super.update(tick2, mouse2);
      this.ratio = Math.sin(this.ratio / 2 * Math.PI);
    }
  };

  // src/skills.ts
  var skills = [
    { name: "catnip", icon: "⚘", description: "Cats |always jump| to\nthe |highest value| tile" },
    { name: "box", icon: "⛶", description: "Cats |always jump| to\nthe |lowest value| tile" },
    { name: "catnap", icon: "◑", description: "|3x| score for |sleeping| cats,\n|no bonus| for |awake| cats" },
    { name: "sprayer", icon: "⛬", description: "|Awake| cats |reveal| the\n|tile value| when selected" },
    { name: "reflexes", icon: "ꔮ", description: "Any |mistake| equal to\nyour |total life| is |ignored" },
    { name: "nine", icon: "⅏", description: "Regain a |life| for every |9|\nused in a |sum", repeatable: true },
    { name: "allergies", icon: "⍨", description: "|2x score| for |catless| tiles,\n|no score| for tiles with |cats|" },
    { name: "hiss", icon: "⑆", description: "Every picked |2| tile raises\nthe |multiplier| by |one", repeatable: true },
    { name: "litter", icon: "☋", description: "Raise the |maximum\npossible |multiplier| by |one", repeatable: true },
    { name: "zoomies", icon: "⧰", description: "The |multiplier| drops\n|20%| more |slowly", repeatable: true },
    { name: "copycat", icon: "♅", description: "Instantly |heal| back\nto the full |9 lives", repeatable: true },
    { name: "hairball", icon: "㉦", description: "|Cats| take |30%| longer\nto |move| on the |board", repeatable: true },
    { name: "purr", icon: "𐄷", description: "|Imperfect sums| increase\nthe |max multiplier| too" },
    { name: "mouse", icon: "𐡸", description: "The |closest cat| jumps onto\nevery |catless tile| you |pick" },
    { name: "scratch", icon: "⚸", description: "|Unpicked tiles| next to\npicked ones |drop| in |value|" },
    { name: "loaf", icon: "𖭅", description: "Tiles under |sleeping cats\n|increase| in |value|" }
  ];

  // src/target.ts
  var Target = class extends Container {
    constructor(game2, x, y) {
      super(game2, x, y);
      this.value = 0;
      this.angle = 0;
      this.targetAngle = Math.random() * Math.PI;
      this.phase = 0;
      this.animationSpeed = 2e-3;
      this.text = new TextEntity(game2, "", 40, 0, 13, -1, ZERO, { shadow: 3, align: "center" });
      this.d = -500;
      this.add(this.text);
    }
    set(val) {
      this.value = val;
      this.text.content = this.value.toString();
      this.angle = this.targetAngle;
      this.targetAngle += random(-1.5, 1.5);
      this.phase = 0;
    }
    update(tick2, mouse2) {
      super.update(tick2, mouse2);
      this.phase = clamp01(this.phase + this.delta * 1e-3);
    }
    draw(ctx2) {
      const a = lerp(this.angle, this.targetAngle, quadEaseInOut(this.phase));
      ctx2.save();
      ctx2.translate(this.p.x, this.p.y);
      ctx2.rotate(a);
      ctx2.scale(1 + this.animationPhaseAbs * 0.05, 1 + this.animationPhaseAbs * 0.05);
      ctx2.lineWidth = 10;
      const col = COLORS.dark;
      drawCircle(ctx2, { x: 0, y: 0 }, 50, "transparent", col);
      const max = 70;
      const min = 35;
      ctx2.beginPath();
      ctx2.moveTo(min, 0);
      ctx2.lineTo(max, 0);
      ctx2.moveTo(-min, 0);
      ctx2.lineTo(-max, 0);
      ctx2.moveTo(0, min);
      ctx2.lineTo(0, max);
      ctx2.moveTo(0, -min);
      ctx2.lineTo(0, -max);
      ctx2.lineWidth = 25;
      ctx2.strokeStyle = COLORS.bg;
      ctx2.stroke();
      ctx2.lineWidth = 10;
      ctx2.strokeStyle = col;
      ctx2.stroke();
      ctx2.rotate(-a);
      super.draw(ctx2);
      ctx2.restore();
    }
  };

  // src/tile.ts
  var TILE_SIZE = 40;
  var TILE_GAP = 6;
  var Tile = class extends Entity {
    constructor(game2, i, demo = false, demoLetter = null) {
      super(game2, 0, 0, TILE_SIZE, TILE_SIZE);
      this.demoLetter = demoLetter;
      this.extraDepth = 0;
      this.pulser = new Pulser();
      this.nudgeDir = { x: 0, y: 0 };
      this.moveTo(i, 50, 45);
      const x = i % GRID_SIZE;
      const y = Math.floor(i / GRID_SIZE);
      if (demo) return;
      this.value = x - 1 + (y - 2) * 3;
      if (x < 2 || x > 4 || y < 2 || y > 4) {
        this.value = 1;
        this.hidden = true;
      }
      this.d = 0;
    }
    moveTo(i, x, y) {
      const xx = i % GRID_SIZE;
      const yy = Math.floor(i / GRID_SIZE);
      this.p = {
        x: x + xx * (TILE_SIZE + TILE_GAP),
        y: y + yy * (TILE_SIZE + TILE_GAP)
      };
      if (this.cat) this.cat.p = this.getCenter();
    }
    getVisibleValue() {
      return this.cat ? "?" : `${this.value}`;
    }
    appear() {
      this.hidden = false;
      this.scale = { x: 0, y: 0 };
      this.tween.scale({ x: 1, y: 1 }, 0.3);
      this.pulse(1);
    }
    increment(amt = 1) {
      this.value = Math.max(1, this.value + amt);
      this.pulse(1);
      this.sunk = false;
      this.extraDepth = 0;
    }
    pulse(speed) {
      this.nudgeDir = { x: 0, y: 0 };
      this.pulser.pulse(speed * 0.6);
    }
    nudge(target) {
      this.nudgeDir = normalize({
        x: target.x - this.p.x,
        y: target.y - this.p.y
      });
    }
    isClose(other) {
      return distance(this.p, other.p) < TILE_SIZE * 1.5;
    }
    getDepth() {
      if (this.sunk) return -1;
      if (this.hovered) return 5;
      if (this.picked) return 4;
      return 0;
    }
    update(tick2, mouse2) {
      this.hovered = !this.demoLetter && this.isInside(mouse2, 1);
      this.d = this.getDepth() + this.extraDepth;
      super.update(tick2, mouse2);
      this.pulser.update(this.delta * 0.01);
    }
    getLineColor() {
      if (this.sunk) return COLORS.dark;
      if (this.picked) return this.hovered && !this.game.usingTouch ? COLORS.mark : COLORS.red;
      return this.hovered && !this.game.usingTouch ? COLORS.red : COLORS.blackish;
    }
    getFillColor() {
      if (this.sunk) return COLORS.bg;
      if (this.picked) return this.hovered && !this.game.usingTouch ? COLORS.red : COLORS.mark;
      return "#fff";
    }
    draw(ctx2) {
      if (this.hidden) return;
      ctx2.save();
      ctx2.fillStyle = this.getFillColor();
      const outline = this.getLineColor();
      ctx2.strokeStyle = outline;
      ctx2.beginPath();
      ctx2.lineWidth = 12;
      const distance2 = -5;
      ctx2.translate(this.p.x + this.nudgeDir.x * this.pulser.ratio * distance2, this.p.y + this.nudgeDir.y * this.pulser.ratio * distance2);
      ctx2.translate(this.s.x * 0.5, this.s.y * 0.5);
      ctx2.scale(this.scale.x + this.pulser.ratio * 0.12, this.scale.y + this.pulser.ratio * 0.12);
      ctx2.translate(-this.s.x * 0.5, -this.s.y * 0.5);
      ctx2.rect(0, 0, this.s.x, this.s.y);
      ctx2.stroke();
      ctx2.fill();
      ctx2.fillStyle = outline;
      ctx2.textAlign = "center";
      ctx2.textBaseline = "middle";
      ctx2.font = `bold 20px ${font}`;
      ctx2.fillText(this.demoLetter ? this.demoLetter : this.value.toString(), this.s.x / 2, this.s.y / 2);
      ctx2.restore();
    }
  };

  // src/scene.ts
  var GRID_SIZE = 7;
  var helpTexts = [
    ["Select |adjacent tiles", "that |add up| to..."],
    ["Too many |mistakes", "|means| you'll |lose|..."],
    ["Tiles with |cats| on them", "will |score| for |more|!"],
    ["Playing |faster| will also", "earn you |bigger points|!"]
  ];
  var Scene = class _Scene extends Container {
    constructor(game2) {
      super(game2);
      this.picks = [];
      this.level = 0;
      this.maxMulti = 1;
      this.cats = [];
      this.catPath = catPathLandscape;
      this.score = 0;
      this.skills = [];
      this.skillButtons = [];
      this.skillTargetLevel = 4;
      this.maxPossibleMulti = 13;
      this.catMoveDelay = 1;
      this.tiles = Array.from(Array(GRID_SIZE * GRID_SIZE)).map((_, i) => new Tile(game2, i));
      this.sumLabel = new WobblyText(game2, "", 25, 400, 30, 0.25, 2.5, { shadow: 3 });
      this.scoreLabel = new TextEntity(game2, "0", 40, 790, 40, -1, ZERO, { shadow: 3, align: "right" });
      this.helpTexts = [
        new WobblyText(game2, "", 30, 500, 50, 0.25, 2.5, { shadow: 3, scales: true }),
        new WobblyText(game2, "", 30, 500, 80, 0.25, 2.5, { shadow: 3, scales: true })
      ];
      this.target = new Target(game2, 500, 220);
      this.multi = new Multiplier(game2, 765, 73);
      this.life = new Life(game2, 10, 10, 200, 20);
      this.button = new ButtonEntity(game2, "TRY AGAIN", 400, 500, 260, 70, () => {
        this.game.audio.setPitch(1);
        this.game.changeScene(new _Scene(game2));
      }, this.game.audio, 25);
      this.button.d = 500;
      this.button.visible = false;
      this.skillBg = new SkillBg(game2);
      this.skillIcons = new TextEntity(game2, "", 25, 790, 122, -1, ZERO, { shadow: 2, align: "right" });
      this.helpTexts.forEach((ht) => ht.d = 500);
      this.life.d = this.multi.d = this.scoreLabel.d = 400;
      this.add(
        ...this.tiles,
        this.sumLabel,
        this.scoreLabel,
        ...this.helpTexts,
        this.target,
        this.multi,
        this.life,
        this.button,
        this.skillBg,
        this.skillIcons
      );
      this.findTarget();
    }
    scaleHelpTexts(scale2) {
      this.helpTexts.forEach((ht) => ht.scale = { x: scale2, y: scale2 });
    }
    presentSkills() {
      this.helpTexts[0].toggle("Pick |one| of these");
      this.helpTexts[1].toggle("bonus |effects|...");
      this.skillBg.visible = true;
      this.game.audio.skills();
      this.game.camera.shake(3, 0.2);
      this.game.getMouse().x = -999;
      this.skillButtons = this.getSkills().map((skill, i) => {
        const showTooltip = () => {
          this.game.audio.preview();
          const parts = skill.description.split("\n");
          this.helpTexts[0].content = parts[0];
          this.helpTexts[1].content = parts[1];
          this.scaleHelpTexts(this.inPortrait ? 0.8 : 1);
        };
        const p = this.inPortrait ? { x: 200, y: 390 + i * 90 } : { x: 155 + 250 * i, y: 350 };
        const button = new ButtonEntity(this.game, `${skill.icon} ${skill.name.toUpperCase()} `, p.x, p.y, 200, 60, () => {
          if (this.game.usingTouch && this.marked !== skill.name) {
            showTooltip();
            setTimeout(() => this.marked = skill.name, 500);
            return;
          }
          this.game.camera.shake(2, 0.15);
          if (skill.name === "litter") this.maxPossibleMulti++;
          if (skill.name === "zoomies") this.multi.dropRate *= 0.8;
          if (skill.name === "copycat") this.life.change(9);
          if (skill.name === "hairball") this.catMoveDelay *= 1.3;
          this.skillBg.visible = false;
          this.game.audio.skill();
          this.skillButtons.forEach((b) => b.dead = true);
          this.skillButtons = [];
          this.skills.push({ ...skill });
          this.skillTargetLevel = this.level + 4 + this.skills.length;
          this.clearHelp();
          this.marked = null;
          this.skillIcons.content = this.skills.map((s) => s.icon).join(" ");
          setTimeout(() => this.next(), 250);
        }, this.game.audio, 20);
        button.onHover = showTooltip;
        button.d = 999;
        return button;
      });
      this.add(...this.skillButtons);
    }
    has(skill) {
      return this.skills.some((s) => s.name === skill);
    }
    skillLevel(skill) {
      return this.skills.filter((s) => s.name === skill).length;
    }
    next() {
      this.locked = false;
      this.findTarget();
    }
    getSkills() {
      return skills.filter((s) => s.repeatable || !this.skills.some((owned) => owned.name === s.name)).sort(randomSorter).slice(0, 3);
    }
    getButtons() {
      return [this.button, ...this.skillButtons];
    }
    update(tick2, mouse2) {
      var _a;
      super.update(tick2, mouse2);
      this.game.canvas.style.cursor = this.tiles.some((t) => !t.hidden && t.hovered) ? "pointer" : "default";
      if ((mouse2.pressing || mouse2.holding) && !this.locked) {
        const tile = this.tiles.find((t) => t.hovered);
        const drag = !mouse2.pressing && mouse2.holding;
        if (drag && (this == null ? void 0 : this.prev) === tile) return;
        if (tile && !tile.hidden && (this.picks.length === 0 || this.picks.some((t) => t.isClose(tile)))) {
          if (this.has("sprayer") && ((_a = tile == null ? void 0 : tile.cat) == null ? void 0 : _a.isAwake())) tile.cat.hop(tile.getCenter());
          if (drag && tile.picked) return;
          tile.picked = !tile.picked;
          this.toggle(tile);
          if (!tile.cat && this.has("mouse")) {
            const p = tile.getCenter();
            const closest = [...this.cats].sort((a, b) => distance(a.p, p) - distance(b.p, p))[0];
            if (closest) {
              const prev = this.tiles.find((t) => t.cat === closest);
              if (prev) prev.cat = null;
              tile.cat = closest;
              closest.hop(p);
            }
          }
          const sum = this.picks.reduce((acc, t) => acc + t.value, 0);
          const knownSum = this.picks.reduce((acc, t) => acc + (t.cat ? 0 : t.value), 0);
          const shownSum = this.picks.some((t) => t.cat) ? `${knownSum}?` : `${sum}`;
          this.showSum(this.picks.length > 1 ? `|${this.picks.map((t) => t.getVisibleValue()).join("|+|")}|=|${shownSum}` : "");
          if (sum >= this.target.value) {
            mouse2.holding = false;
            this.scoreRound(sum);
          } else {
            this.add(new TextPop(this.game, shownSum, tile.getCenter(), "#fff", 35));
          }
        }
        this.prev = tile;
        return;
      }
      this.prev = null;
    }
    showSum(sum) {
      const ctx2 = this.game.canvas.getContext("2d");
      const parts = sum.split("+");
      if (parts.length > 3) {
        for (let i = 0; i < parts.length - 1; i++) {
          const cur = [...parts.slice(0, i), parts[parts.length - 1]];
          ctx2.font = `bold 25px ${font}`;
          if (ctx2.measureText(cur.join("+")).width > this.sumLimit) {
            const half = Math.floor(cur.length / 2);
            this.sumLabel.content = [...cur.slice(0, half), "...", ...cur.slice(half)].join("+");
            return;
          }
        }
      }
      this.sumLabel.content = sum;
    }
    showHelp() {
      this.helpTexts.forEach((ht, i) => {
        var _a, _b;
        ht.toggle((_b = (_a = helpTexts[this.level]) == null ? void 0 : _a[i]) != null ? _b : "");
      });
    }
    clearHelp() {
      this.helpTexts.forEach((ht) => ht.toggle(""));
    }
    ratioChanged(portrait) {
      this.tiles.forEach((t, i) => t.moveTo(i, portrait ? 45 : 50, portrait ? 400 : 45));
      this.target.p = portrait ? { x: 200, y: 320 } : { x: 550, y: 270 };
      this.sumLabel.p = { x: portrait ? 200 : 400, y: portrait ? 150 : 380 };
      this.catPath = portrait ? catPathPortrait : catPathLandscape;
      this.scoreLabel.p = portrait ? { x: 390, y: 40 } : { x: 790, y: 40 };
      this.multi.p = portrait ? { x: 365, y: 75 } : { x: 765, y: 73 };
      this.helpTexts.forEach((ht, i) => ht.p = portrait ? { x: 200, y: 200 + i * 35 } : { x: 550, y: 160 + i * 35 });
      this.life.p = portrait ? { x: 10, y: 765 } : { x: 10, y: 10 };
      this.life.changeSize(portrait);
      this.sumLimit = portrait ? 250 : 700;
      this.button.p = offset(this.target.p, -130, -35);
      this.inPortrait = portrait;
      this.skillIcons.p = portrait ? { x: 390, y: 120 } : { x: 790, y: 122 };
    }
    randomOffset(p) {
      return offset(p, random(-10, 10), random(-10, 10));
    }
    scoreRound(sum) {
      this.multi.paused = true;
      this.clearHelp();
      this.locked = true;
      this.showSum(this.picks.length > 1 ? `|${this.picks.map((t) => t.value).join("|+|")}|=|${sum}` : "");
      const diff = sum - this.target.value;
      const perfect = diff === 0;
      const pp = offset(this.picks[this.picks.length - 1].getCenter(), 0, -2);
      const winText = randomCell([
        "PURRFECT!",
        "PAWFECT!",
        "PAWLESS!",
        "MEOWRVELOUS!",
        "FURFECT!",
        "CATEMPLARY!",
        "FELICCIMO!",
        "RADICLAW!"
      ]);
      const badText = randomCell([
        "MEOWSTAKE!",
        "PURROR!",
        "MEOWSCALCULATION!",
        "MEOWSSTEP!",
        "FURROR!",
        "CATASTROPHE!",
        "MEOWSERABLE!"
      ]);
      this.add(new TextPop(this.game, perfect ? winText : badText, this.randomOffset(pp), perfect ? COLORS.mark : COLORS.red, 20));
      if (perfect) {
        this.game.audio.done();
        this.maxMulti++;
      } else {
        if (this.has("purr")) this.maxMulti++;
        this.game.camera.shake(5, 0.1);
        this.game.audio.bad();
        setTimeout(() => {
          this.game.audio.bad();
          this.add(new TextPop(this.game, `${this.target.value - sum}`, this.randomOffset(pp), COLORS.red, 60));
          this.game.camera.shake(5, 0.15);
        }, 300);
      }
      this.picks.reverse();
      this.cats.forEach((c) => c.moved = false);
      if (!this.has("reflexes") || !this.life.equals(diff)) this.life.change(-diff);
      let hissMulti = 1;
      this.picks.forEach((t, i) => {
        setTimeout(() => {
          var _a;
          if (this.has("nine") && t.value === 9) {
            const amt = this.skillLevel("nine");
            setTimeout(() => {
              this.add(new TextPop(this.game, `+${amt}`, this.randomOffset(t.getCenter()), COLORS.green, 35));
              this.life.change(amt);
            }, 200);
          }
          if (this.has("hiss") && t.value === 2) {
            hissMulti += this.skillLevel("hiss");
            setTimeout(() => {
              this.add(new TextPop(this.game, `x${hissMulti}`, this.randomOffset(t.getCenter()), COLORS.green, 35));
            }, 100);
          }
          if (i % 2 === 0) this.game.audio.setPitch(Math.min(1.5, 1 + i * 0.05));
          this.game.audio.score(i);
          t.pulse(0.6);
          t.sunk = true;
          t.extraDepth = -i;
          this.game.camera.shake(2, 0.05);
          if (i > 0) {
            this.add(new LineParticle(this.game, this.picks[i - 1].getCenter(), t.getCenter(), 1, 5, COLORS.mark, random(0, 10)));
          }
          if (i < this.picks.length - 1) t.nudge(this.picks[i + 1].p);
          t.picked = false;
          const sleeping = !((_a = t.cat) == null ? void 0 : _a.isAwake());
          const catMulti = this.has("catnap") ? sleeping ? 15 : 1 : 5;
          const allergyMulti = this.has("allergies") ? t.cat ? 0 : 2 : 1;
          const amount = t.value * (i + 1) * (t.cat ? catMulti : 1) * this.multi.value * (perfect ? 5 : 1) * allergyMulti * hissMulti;
          this.score += amount;
          this.scoreLabel.content = asScore(this.score);
          if (allergyMulti > 0) this.add(new TextPop(this.game, asScore(amount), t.getCenter(), t.cat ? COLORS.mark : "#fff"));
          else this.add(new TextPop(this.game, "ALLERGIES", t.getCenter(), COLORS.red, 20));
          if (t.cat) {
            this.hopCat(t.cat, t);
          }
        }, i * 120 + 300 + (perfect ? 0 : 500));
      });
      setTimeout(() => {
        this.game.audio.setPitch(1);
        if (this.life.isDead()) {
          setTimeout(() => {
            this.game.camera.shake(5, 0.2);
            this.helpTexts[0].toggle("|GAME OVER|!");
            this.helpTexts[1].toggle(`Final score: |${asScore(this.score)}`);
            this.cats.forEach((c) => c.sleep(true));
            this.game.audio.lose();
            this.game.audio.setPitch(0.7);
            this.button.visible = true;
          }, 500);
          return;
        }
        const appearing = this.tiles.filter((t) => t.hidden && this.picks.some((p) => p.isClose(t)));
        if (appearing.length > 0) this.game.audio.appear();
        appearing.forEach((t) => t.appear());
        this.picks.forEach((t) => t.increment());
        if (this.has("scratch")) this.tiles.filter((t) => !t.hidden && !this.picks.includes(t) && this.picks.some((p) => p.isClose(t))).forEach((t) => t.increment(-1));
        if (this.has("loaf")) {
          this.tiles.filter((t) => !t.hidden && t.cat && !t.cat.isAwake()).forEach((t) => {
            t.increment();
            this.add(new TextPop(this.game, "LOAF", t.getCenter(), COLORS.green, 20));
          });
        }
        this.picks = [];
        this.sumLabel.content = "";
        this.addCat();
        if (this.level === this.skillTargetLevel) {
          this.presentSkills();
        } else {
          this.next();
        }
        this.cats.filter((c) => !c.moved).forEach((c) => c.sleep(true));
      }, 800 + this.picks.length * 120);
    }
    findTarget() {
      this.showHelp();
      this.level++;
      this.multi.paused = false;
      this.multi.reset(Math.min(this.maxPossibleMulti, this.maxMulti));
      this.target.set(this.generateTarget(this.level + 1));
    }
    generateTarget(count) {
      const cells = [randomCell(this.tiles.filter((t) => !t.hidden))];
      for (let i = 0; i < Math.min(count, Math.floor(this.tiles.filter((t) => !t.hidden).length / 2)) - 1; i++) {
        cells.push(randomCell(this.tiles.filter((t) => !t.hidden && !cells.includes(t) && cells.some((c) => c.isClose(t)))));
      }
      return cells.reduce((acc, t) => acc + t.value, 0);
    }
    toggle(tile) {
      this.game.audio.pick();
      tile.pulse(1);
      if (this.picks.includes(tile)) {
        this.picks = this.picks.filter((t) => t !== tile);
        return;
      }
      this.picks.push(tile);
    }
    addCat() {
      if (!this.tiles.some((t) => !t.hidden && !t.cat)) return;
      const cat = new Cat(this.game, this.catPath[0].x, this.catPath[0].y);
      this.cats.push(cat);
      this.add(cat);
      cat.hop({ x: this.catPath[1].x, y: this.catPath[1].y });
      setTimeout(() => cat.hop({ x: this.catPath[2].x, y: this.catPath[2].y }), 1e3 * this.catMoveDelay);
      setTimeout(() => cat.hop({ x: this.catPath[3].x, y: this.catPath[3].y }), 1700 * this.catMoveDelay);
      setTimeout(() => this.hopCat(cat), 2600 * this.catMoveDelay);
    }
    getHopTarget() {
      var _a;
      const opts = this.tiles.filter((t) => !t.hidden && !t.cat);
      if (opts.length === 0) return null;
      const first = ((_a = this.skills.find((s) => s.name === "catnip" || s.name === "box")) == null ? void 0 : _a.name) === "catnip";
      return this.has("catnip") || this.has("box") ? opts.sort((a, b) => b.value - a.value)[first ? 0 : opts.length - 1] : randomCell(opts);
    }
    hopCat(cat, prev = null) {
      const tile = this.getHopTarget();
      if (!tile) return;
      tile.cat = cat;
      if (prev) prev.cat = null;
      cat.hop(offset(tile.getCenter(), 0, 5));
    }
    draw(ctx2) {
      drawBg(ctx2);
      super.draw(ctx2);
    }
  };

  // src/intro.ts
  var Intro = class extends Container {
    constructor(game2) {
      super(game2);
      this.cats = [];
      this.tiles = "CATCULUS".split("").map((c, i) => {
        const tile = new Tile(game2, i, true, c);
        tile.p = { x: i * (TILE_SIZE + TILE_GAP) + 220, y: 120 };
        return tile;
      });
      this.button = new ButtonEntity(game2, "⏵ PLAY ", 400, 320, 260, 70, () => {
        game2.changeScene(new Scene(game2));
      }, this.game.audio, 35);
      this.addCat(this.tiles[0], -TILE_SIZE - TILE_GAP);
      this.addCat(this.tiles[this.tiles.length - 1], TILE_SIZE + TILE_GAP);
      this.addCat(this.tiles[2], 0);
      this.cats[0].sleep(true);
      this.cats[1].sleep(true);
      this.add(
        new WobblyText(game2, "|Antti Haavikko| presents", 18, 400, 105, 0.25, 1.5, { shadow: 2 }),
        new WobblyText(game2, "Made for |js13kGames| 2025", 12, 400, 182, 0.2, 1.5, { shadow: 1.5 }),
        ...this.tiles,
        ...this.cats
      );
      setTimeout(() => this.changeTile(), 3e3);
    }
    end() {
      this.ended = true;
    }
    changeTile() {
      if (this.ended) return;
      this.cats[2].hop(randomCell(this.tiles).getCenter());
      setTimeout(() => this.changeTile(), randomInt(1e3, 8e3));
    }
    getButtons() {
      return [this.button];
    }
    update(tick2, mouse2) {
      super.update(tick2, mouse2);
      this.button.update(tick2, mouse2);
    }
    addCat(tile, offset2) {
      const p = tile.getCenter();
      this.cats.push(new Cat(this.game, p.x + offset2, p.y));
    }
    ratioChanged(portrait) {
      this.button.p = portrait ? { x: 70, y: 420 } : { x: 260, y: 280 };
      this.logoX = portrait ? -140 : -200;
      this.logoY = portrait ? 220 : -50;
      this.logoScale = portrait ? 0.85 : 1.5;
    }
    draw(ctx2) {
      ctx2.save();
      drawBg(ctx2);
      ctx2.translate(this.logoX, this.logoY);
      ctx2.scale(this.logoScale, this.logoScale);
      super.draw(ctx2);
      ctx2.restore();
      this.button.draw(ctx2);
    }
  };

  // src/index.ts
  var LANDSCAPE = { w: 800, h: 400 };
  var PORTRAIT = { w: 400, h: 800 };
  var canvas = document.getElementById("game");
  var ctx = canvas.getContext("2d");
  var mouse = { x: -999, y: -999 };
  var audio = new AudioManager();
  audio.prepare();
  var game = new Game(audio, canvas);
  game.scene = new Intro(game);
  var scale = 1;
  var offsetX = 0;
  var offsetY = 0;
  var dpr = 1;
  var wasPortrait = null;
  var resize = () => {
    var _a;
    const vw = Math.max(1, window.innerWidth);
    const vh = Math.max(1, window.innerHeight);
    const portrait = vh > vw;
    const size = portrait ? PORTRAIT : LANDSCAPE;
    dpr = Math.min(window.devicePixelRatio || 1, 3);
    canvas.width = Math.round(vw * dpr);
    canvas.height = Math.round(vh * dpr);
    canvas.style.width = `${vw}px`;
    canvas.style.height = `${vh}px`;
    scale = Math.min(vw / size.w, vh / size.h);
    offsetX = (vw - size.w * scale) * 0.5;
    offsetY = (vh - size.h * scale) * 0.5;
    view.portrait = portrait;
    view.width = size.w;
    view.height = size.h;
    view.left = -offsetX / scale;
    view.top = -offsetY / scale;
    view.right = (vw - offsetX) / scale;
    view.bottom = (vh - offsetY) / scale;
    if (portrait !== wasPortrait) (_a = game.scene) == null ? void 0 : _a.ratioChanged(portrait);
    wasPortrait = portrait;
  };
  resize();
  window.addEventListener("resize", resize);
  window.addEventListener("orientationchange", () => setTimeout(resize, 100));
  var move = (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = (e.clientX - rect.left - offsetX) / scale;
    mouse.y = (e.clientY - rect.top - offsetY) / scale;
  };
  var activePointer = null;
  canvas.addEventListener("pointerdown", (e) => {
    if (activePointer !== null && e.pointerId !== activePointer) return;
    if (e.pointerType === "mouse" && e.button !== 0) return;
    e.preventDefault();
    activePointer = e.pointerId;
    try {
      canvas.setPointerCapture(e.pointerId);
    } catch (err) {
    }
    game.usingTouch = e.pointerType !== "mouse";
    audio.startMusic();
    move(e);
    mouse.pressing = true;
    mouse.holding = true;
    game.click(mouse);
  });
  canvas.addEventListener("pointermove", (e) => {
    if (activePointer !== null && e.pointerId !== activePointer) return;
    if (e.pointerType !== "mouse" && activePointer === null) return;
    move(e);
  });
  var release = (e) => {
    if (activePointer !== null && e.pointerId !== activePointer) return;
    activePointer = null;
    mouse.holding = false;
  };
  canvas.addEventListener("pointerup", release);
  canvas.addEventListener("pointercancel", release);
  canvas.addEventListener("contextmenu", (e) => e.preventDefault());
  window.addEventListener("blur", () => {
    activePointer = null;
    mouse.pressing = false;
    mouse.holding = false;
  });
  var muteButton = document.getElementById("mute");
  var syncMute = () => {
    const muted = audio.isMuted();
    muteButton.classList.toggle("muted", muted);
    muteButton.setAttribute("aria-pressed", muted ? "true" : "false");
    muteButton.setAttribute("aria-label", muted ? "Unmute sound" : "Mute sound");
    muteButton.title = muted ? "Unmute sound" : "Mute sound";
  };
  muteButton.addEventListener("pointerdown", (e) => e.stopPropagation());
  muteButton.addEventListener("click", () => {
    audio.setMuted(!audio.isMuted());
    audio.startMusic();
    syncMute();
    muteButton.blur();
  });
  syncMute();
  var gameTime = 0;
  var lastFrame = null;
  document.addEventListener("visibilitychange", () => {
    audio.setHidden(document.hidden);
    lastFrame = null;
  });
  var tick = (t) => {
    requestAnimationFrame(tick);
    const dt = lastFrame === null ? 16 : Math.min(t - lastFrame, 100);
    lastFrame = t;
    gameTime += dt;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    game.update(gameTime, mouse);
    ctx.setTransform(scale * dpr, 0, 0, scale * dpr, offsetX * dpr, offsetY * dpr);
    game.draw(ctx);
  };
  requestAnimationFrame(tick);
  window.__catculus = { game, view };
})();
