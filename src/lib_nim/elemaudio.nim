{. emit: """import { el } from "@elemaudio/core" """ .}

type AudioNode* = ref object

# constants
func `@`* (val: float): AudioNode {.importjs: "el.const({value: #})" .}
func `@`* (val: float, key: cstring): AudioNode {. importjs: "el.const({value: #, key: #})" .}
func `@`* (val: float, key: string): AudioNode {. inline .} =
  `@`(val, key.cstring)

# oscillators
func cycle* (fq: float): AudioNode {. importjs: "el.cycle(@)" .}
func cycle* (a: AudioNode): AudioNode {. importjs: "el.cycle(@)" .}
func triangle* (fq: float): AudioNode {. importjs: "el.triangle(@)" .}
func triangle* (a: AudioNode): AudioNode {. importjs: "el.triangle(@)" .}
func square* (fq: float): AudioNode {. importjs: "el.square(@)" .}
func square* (a: AudioNode): AudioNode {. importjs: "el.square(@)" .}
func saw* (fq: float): AudioNode {. importjs: "el.saw(@)" .}
func saw* (a: AudioNode): AudioNode {. importjs: "el.saw(@)" .}
func phasor* (fq: float): AudioNode {. importjs: "el.phasor(@)" .}
func phasor* (fq: AudioNode): AudioNode {. importjs: "el.phasor(@)" .}
func train* (fq: float): AudioNode {. importjs: "el.train(@)" .}
func train* (fq: AudioNode): AudioNode {. importjs: "el.train(@)" .}

# noise
func noise* (): AudioNode {. importjs: "el.noise()" .}
func pink* (n: AudioNode): AudioNode {. importjs: "el.pink(@)" .}
func pinkNoise* (): AudioNode {. importjs: "el.pinknoise()" .}

# operators
func `+`* (a: AudioNode, b: AudioNode ): AudioNode {. importjs: "el.add(@)" .}
func `+`* (a: AudioNode, b: float ): AudioNode {. importjs: "el.add(@)" .}
func `+`* (a: float, b: AudioNode ): AudioNode {. importjs: "el.add(@)" .}
func `+=`* (a: var AudioNode, b: AudioNode ): void =
  {. emit: "`a` = el.add(`a`, `b`);" .}
func `-`* (a: AudioNode, b: AudioNode ): AudioNode {. importjs: "el.sub(@)" .}
func `-`* (a: AudioNode, b: float ): AudioNode {. importjs: "el.sub(@)" .}
func `-`* (a: float, b: AudioNode ): AudioNode {. importjs: "el.sub(@)" .}
func `*`* (a: AudioNode, b: AudioNode ): AudioNode {. importjs: "el.mul(@)" .}
func `*`* (a: AudioNode, b: float ): AudioNode {. importjs: "el.mul(@)" .}
func `*`* (a: float, b: AudioNode ): AudioNode {. importjs: "el.mul(@)" .}
func `/`* (a: AudioNode, b: AudioNode ): AudioNode {. importjs: "el.div(@)" .}
func `/`* (a: AudioNode, b: float ): AudioNode {. importjs: "el.div(@)" .}
func `/`* (a: float, b: AudioNode ): AudioNode {. importjs: "el.div(@)" .}
func `<`* (a: AudioNode, b: AudioNode ): AudioNode {. importjs: "el.le(@)" .}
func `<`* (a: AudioNode, b: float ): AudioNode {. importjs: "el.le(@)" .}
func `<`* (a: float, b: AudioNode ): AudioNode {. importjs: "el.le(@)" .}
func `>`* (a: AudioNode, b: AudioNode ): AudioNode {. importjs: "el.ge(@)" .}
func `>`* (a: AudioNode, b: float ): AudioNode {. importjs: "el.ge(@)" .}
func `>`* (a: float, b: AudioNode ): AudioNode {. importjs: "el.ge(@)" .}
func `<=`* (a: AudioNode, b: AudioNode ): AudioNode {. importjs: "el.leq(@)" .}
func `<=`* (a: AudioNode, b: float ): AudioNode {. importjs: "el.leq(@)" .}
func `<=`* (a: float, b: AudioNode ): AudioNode {. importjs: "el.leq(@)" .}
func `>=`* (a: AudioNode, b: AudioNode ): AudioNode {. importjs: "el.geq(@)" .}
func `>=`* (a: AudioNode, b: float ): AudioNode {. importjs: "el.geq(@)" .}
func `>=`* (a: float, b: AudioNode ): AudioNode {. importjs: "el.geq(@)" .}
func pow* (a: AudioNode, b: AudioNode): AudioNode {. importjs: "el.pow(@)" .}
func pow* (a: AudioNode, b: float): AudioNode {. importjs: "el.pow(@)" .}
func pow* (a: float, b: AudioNode): AudioNode {. importjs: "el.pow(@)" .}
func `**`* (a: AudioNode, b: AudioNode): AudioNode {. importjs: "el.pow(@)" .}
func `**`* (a: AudioNode, b: float): AudioNode {. importjs: "el.pow(@)" .}
func `**`* (a: float, b: AudioNode): AudioNode {. importjs: "el.pow(@)" .}

# utils
func adsr* (attack: AudioNode, decay: AudioNode, sustain: AudioNode, release: AudioNode, gate: AudioNode): AudioNode {. importjs: "el.adsr(@)" .}
func lowpass* (freq: AudioNode, q: AudioNode, sig: AudioNode): AudioNode {. importjs: "el.lowpass(@)" .}
func sr* (): AudioNode {. importjs: "el.sr()" .}
func sampleRate* (): AudioNode {. importjs: "el.sr()" .}
func time* (): AudioNode {. importjs: "el.time()" .}

# helpers

func timedTrigger* (start: float, dur: float, key = ""): AudioNode =
  let t = time() / sampleRate()
  let startNode = start @ cstring(key & "_start")
  let endNode = (start + dur) @ cstring(key & "_end")
  (t > startNode) * (t < endNode)

func am* (sig: AudioNode, lfo: AudioNode, modAmount: AudioNode): AudioNode =
  sig * (1.0 + lfo * modAmount) / (1.0 + modAmount)

func fit0111* (sig: AudioNode): AudioNode =
  sig * 2.0 - 1.0

func fit1101* (sig: AudioNode): AudioNode =
  sig * 0.5 + 0.5
