import React, { useState } from 'react';
import { 
  Calculator, Receipt, Clock, ArrowLeftRight, FileText, 
  RotateCcw, Delete, Plus, Minus, CheckCircle, Users, Percent, Sparkles, Check
} from 'lucide-react';

interface SimulatorProps {
  type: 'calculator' | 'tip-calc' | 'time-calc' | 'unit-converter' | 'scratchpad';
}

function safeEvaluateExpression(expr: string): number {
  const sanitized = expr.replace(/×/g, '*').replace(/÷/g, '/').replace(/[^0-9+\-*/.]/g, '');
  const tokens = sanitized.match(/(\d+(\.\d+)?|[+\-*/])/g);
  if (!tokens || tokens.length === 0) return 0;
  
  const pass1: (number | string)[] = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token === '*' || token === '/') {
      const prev = Number(pass1.pop() || 0);
      const nextToken = tokens[++i];
      const next = nextToken !== undefined ? Number(nextToken) : 1;
      if (token === '*') {
        pass1.push(prev * next);
      } else {
        pass1.push(next !== 0 ? prev / next : 0);
      }
    } else if (token === '+' || token === '-') {
      pass1.push(token);
    } else {
      pass1.push(Number(token));
    }
  }

  let result = typeof pass1[0] === 'number' ? pass1[0] : 0;
  for (let i = 1; i < pass1.length; i += 2) {
    const op = pass1[i];
    const nextVal = pass1[i + 1];
    const next = nextVal !== undefined ? Number(nextVal) : 0;
    if (op === '+') result += next;
    else if (op === '-') result -= next;
  }
  return isNaN(result) ? 0 : result;
}

export const AppInteractiveSimulators: React.FC<SimulatorProps> = ({ type }) => {
  // Calculator State
  const [calcDisplay, setCalcDisplay] = useState('0');
  const [calcFormula, setCalcFormula] = useState('');
  const [calcClearNext, setCalcClearNext] = useState(false);

  // Tip Calculator State
  const [billAmount, setBillAmount] = useState<number>(85.0);
  const [tipPercent, setTipPercent] = useState<number>(15);
  const [partyCount, setPartyCount] = useState<number>(3);
  const [roundUp, setRoundUp] = useState<boolean>(false);

  // Time Calculator State
  const [startTime, setStartTime] = useState('09:15');
  const [endTime, setEndTime] = useState('17:45');
  const [breakMins, setBreakMins] = useState(45);

  // Unit Converter State
  const [unitCategory, setUnitCategory] = useState<'length' | 'weight' | 'storage'>('length');
  const [inputUnitVal, setInputUnitVal] = useState<number>(100);
  const [fromUnit, setFromUnit] = useState<string>('m');
  const [toUnit, setToUnit] = useState<string>('ft');

  // Memo Scratchpad State
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Review Android Jetpack Compose release build', done: true },
    { id: 2, text: 'Optimize precision math floating-point precision', done: true },
    { id: 3, text: 'Verify sub-5MB APK compression target', done: false },
    { id: 4, text: 'Benchmark cold start latency under 180ms', done: false },
  ]);
  const [newTaskInput, setNewTaskInput] = useState('');

  // --- Calculator Logic ---
  const handleCalcNumber = (num: string) => {
    if (calcDisplay === '0' || calcClearNext) {
      setCalcDisplay(num);
      setCalcClearNext(false);
    } else {
      setCalcDisplay(calcDisplay + num);
    }
  };

  const handleCalcOperator = (op: string) => {
    setCalcFormula(`${calcDisplay} ${op} `);
    setCalcClearNext(true);
  };

  const handleCalcClear = () => {
    setCalcDisplay('0');
    setCalcFormula('');
    setCalcClearNext(false);
  };

  const handleCalcDelete = () => {
    if (calcDisplay.length > 1) {
      setCalcDisplay(calcDisplay.slice(0, -1));
    } else {
      setCalcDisplay('0');
    }
  };

  const handleCalcEquals = () => {
    if (!calcFormula) return;
    try {
      const fullExpression = `${calcFormula}${calcDisplay}`;
      const result = safeEvaluateExpression(fullExpression);
      const formatted = Number.isInteger(result) ? String(result) : Number(result).toFixed(4).replace(/\.?0+$/, '');
      setCalcFormula(`${calcFormula}${calcDisplay} =`);
      setCalcDisplay(formatted);
      setCalcClearNext(true);
    } catch {
      setCalcDisplay('Error');
      setCalcClearNext(true);
    }
  };

  // --- Tip Calculator Logic ---
  const tipAmount = (billAmount * tipPercent) / 100;
  const rawTotal = billAmount + tipAmount;
  const finalTotal = roundUp ? Math.ceil(rawTotal) : rawTotal;
  const perPersonAmount = partyCount > 0 ? (finalTotal / partyCount) : finalTotal;

  // --- Time Calculator Logic ---
  const calculateDuration = () => {
    if (!startTime || !endTime) return { hours: 0, minutes: 0, formatted: '0h 0m' };
    const [startH, startM] = startTime.split(':').map(Number);
    const [endH, endM] = endTime.split(':').map(Number);
    
    let totalStartMinutes = startH * 60 + startM;
    let totalEndMinutes = endH * 60 + endM;
    
    if (totalEndMinutes < totalStartMinutes) {
      totalEndMinutes += 24 * 60; // Next day
    }
    
    let diffMinutes = totalEndMinutes - totalStartMinutes - breakMins;
    if (diffMinutes < 0) diffMinutes = 0;
    
    const diffHours = Math.floor(diffMinutes / 60);
    const remainingMins = diffMinutes % 60;
    const decimalHours = (diffMinutes / 60).toFixed(2);
    
    return {
      hours: diffHours,
      minutes: remainingMins,
      decimal: decimalHours,
      totalMinutes: diffMinutes,
      formatted: `${diffHours}h ${remainingMins}m`
    };
  };

  const timeResult = calculateDuration();

  // --- Unit Converter Logic ---
  const convertUnits = () => {
    const val = Number(inputUnitVal) || 0;
    if (unitCategory === 'length') {
      // Base: meters
      const toMeters: Record<string, number> = { m: 1, km: 1000, cm: 0.01, mm: 0.001, ft: 0.3048, in: 0.0254, mi: 1609.34 };
      const fromMeters = val * (toMeters[fromUnit] || 1);
      const res = fromMeters / (toMeters[toUnit] || 1);
      return res.toLocaleString(undefined, { maximumFractionDigits: 4 });
    } else if (unitCategory === 'weight') {
      // Base: kg
      const toKg: Record<string, number> = { kg: 1, g: 0.001, mg: 0.000001, lb: 0.453592, oz: 0.0283495 };
      const fromKg = val * (toKg[fromUnit] || 1);
      const res = fromKg / (toKg[toUnit] || 1);
      return res.toLocaleString(undefined, { maximumFractionDigits: 4 });
    } else {
      // Storage base: MB
      const toMb: Record<string, number> = { mb: 1, gb: 1024, tb: 1048576, kb: 0.0009765625 };
      const fromMb = val * (toMb[fromUnit] || 1);
      const res = fromMb / (toMb[toUnit] || 1);
      return res.toLocaleString(undefined, { maximumFractionDigits: 4 });
    }
  };

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-800 font-sans select-none">
      {/* Android Device Status Bar */}
      <div className="flex items-center justify-between text-xs text-slate-400 pb-3 mb-3 border-b border-slate-800/80">
        <span className="font-mono-code font-semibold tracking-wider text-slate-300">09:41</span>
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase font-bold text-blue-400 bg-blue-950/60 px-1.5 py-0.5 rounded border border-blue-800/50">
            BONAI ANDROID
          </span>
          <span className="text-emerald-400 font-mono-code text-[11px]">100%</span>
        </div>
      </div>

      {/* 1. CALCULATOR SIMULATOR */}
      {type === 'calculator' && (
        <div id="sim-calculator" className="space-y-3">
          <div className="bg-slate-950/80 rounded-xl p-3.5 border border-slate-800/80 text-right min-h-[90px] flex flex-col justify-end">
            <div className="text-xs text-slate-400 font-mono-code h-4 truncate">
              {calcFormula || '\u00A0'}
            </div>
            <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono-code overflow-x-auto truncate">
              {calcDisplay}
            </div>
          </div>

          {/* Calculator Keypad */}
          <div className="grid grid-cols-4 gap-2 text-sm font-semibold">
            <button
              onClick={handleCalcClear}
              className="py-3 rounded-lg bg-rose-950/40 text-rose-300 border border-rose-800/40 hover:bg-rose-900/40 active:scale-95 transition-all"
            >
              AC
            </button>
            <button
              onClick={handleCalcDelete}
              className="py-3 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 active:scale-95 transition-all flex items-center justify-center"
            >
              <Delete className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                const val = parseFloat(calcDisplay) / 100;
                setCalcDisplay(String(val));
              }}
              className="py-3 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 active:scale-95 transition-all"
            >
              %
            </button>
            <button
              onClick={() => handleCalcOperator('÷')}
              className="py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 active:scale-95 transition-all text-base"
            >
              ÷
            </button>

            {['7', '8', '9'].map((n) => (
              <button
                key={n}
                onClick={() => handleCalcNumber(n)}
                className="py-3 rounded-lg bg-slate-800/90 text-white hover:bg-slate-700 active:scale-95 transition-all text-base"
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => handleCalcOperator('×')}
              className="py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 active:scale-95 transition-all text-base"
            >
              ×
            </button>

            {['4', '5', '6'].map((n) => (
              <button
                key={n}
                onClick={() => handleCalcNumber(n)}
                className="py-3 rounded-lg bg-slate-800/90 text-white hover:bg-slate-700 active:scale-95 transition-all text-base"
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => handleCalcOperator('-')}
              className="py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 active:scale-95 transition-all text-base"
            >
              −
            </button>

            {['1', '2', '3'].map((n) => (
              <button
                key={n}
                onClick={() => handleCalcNumber(n)}
                className="py-3 rounded-lg bg-slate-800/90 text-white hover:bg-slate-700 active:scale-95 transition-all text-base"
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => handleCalcOperator('+')}
              className="py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 active:scale-95 transition-all text-base"
            >
              +
            </button>

            <button
              onClick={() => handleCalcNumber('0')}
              className="col-span-2 py-3 rounded-lg bg-slate-800/90 text-white hover:bg-slate-700 active:scale-95 transition-all text-base"
            >
              0
            </button>
            <button
              onClick={() => {
                if (!calcDisplay.includes('.')) {
                  setCalcDisplay(calcDisplay + '.');
                }
              }}
              className="py-3 rounded-lg bg-slate-800/90 text-white hover:bg-slate-700 active:scale-95 transition-all text-base"
            >
              .
            </button>
            <button
              onClick={handleCalcEquals}
              className="py-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 active:scale-95 transition-all text-base font-bold shadow-md shadow-emerald-900/30"
            >
              =
            </button>
          </div>
        </div>
      )}

      {/* 2. TIP & BILL SPLITTER SIMULATOR */}
      {type === 'tip-calc' && (
        <div id="sim-tip-calculator" className="space-y-3.5">
          {/* Result Card */}
          <div className="bg-gradient-to-br from-blue-950/80 to-slate-900 rounded-xl p-4 border border-blue-800/40">
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-blue-300 font-semibold">Per Person Share</span>
                <div className="text-3xl font-bold text-white font-mono-code mt-0.5">
                  ${perPersonAmount.toFixed(2)}
                </div>
              </div>
              <div className="text-right">
                <span className="text-[11px] uppercase tracking-wider text-slate-400">Total with Tip</span>
                <div className="text-base font-semibold text-emerald-400 font-mono-code">
                  ${finalTotal.toFixed(2)}
                </div>
              </div>
            </div>
            <div className="pt-2 border-t border-blue-900/50 flex justify-between text-xs text-slate-300">
              <span>Tip ({tipPercent}%): <strong className="text-white">${tipAmount.toFixed(2)}</strong></span>
              <span>Split across <strong className="text-white">{partyCount} {partyCount === 1 ? 'person' : 'people'}</strong></span>
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-3 bg-slate-950/50 p-3 rounded-xl border border-slate-800">
            <div>
              <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                <span>Bill Amount ($)</span>
                <span className="font-mono-code text-blue-400">${billAmount.toFixed(2)}</span>
              </div>
              <input
                type="number"
                min="1"
                step="5"
                value={billAmount}
                onChange={(e) => setBillAmount(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-white font-mono-code focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-medium text-slate-300 mb-1.5">
                <span>Tip Percentage</span>
                <span className="font-mono-code text-blue-400 font-semibold">{tipPercent}%</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {[10, 15, 18, 20].map((pct) => (
                  <button
                    key={pct}
                    onClick={() => setTipPercent(pct)}
                    className={`py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                      tipPercent === pct
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {pct}%
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-blue-400" />
                <span>Split with:</span>
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPartyCount(Math.max(1, partyCount - 1))}
                  className="w-7 h-7 rounded-md bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-6 text-center font-mono-code font-bold text-sm text-white">
                  {partyCount}
                </span>
                <button
                  onClick={() => setPartyCount(partyCount + 1)}
                  className="w-7 h-7 rounded-md bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-slate-800/80">
              <span className="text-xs text-slate-300">Round up to next whole dollar</span>
              <button
                onClick={() => setRoundUp(!roundUp)}
                className={`w-9 h-5 rounded-full p-0.5 transition-colors ${roundUp ? 'bg-blue-600' : 'bg-slate-700'}`}
              >
                <div className={`w-4 h-4 rounded-full bg-white transition-transform ${roundUp ? 'translate-x-4' : 'translate-x-0'}`} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. TIME & DURATION CALCULATOR SIMULATOR */}
      {type === 'time-calc' && (
        <div id="sim-time-calculator" className="space-y-3.5">
          {/* Result Card */}
          <div className="bg-gradient-to-br from-indigo-950/80 to-slate-900 rounded-xl p-4 border border-indigo-800/40">
            <span className="text-[11px] uppercase tracking-wider text-indigo-300 font-semibold">Net Elapsed Duration</span>
            <div className="text-3xl font-bold text-white font-mono-code mt-0.5">
              {timeResult.formatted}
            </div>
            <div className="pt-2 mt-2 border-t border-indigo-900/50 flex justify-between text-xs text-slate-300">
              <span>Decimal Hours: <strong className="text-emerald-400 font-mono-code">{timeResult.decimal} hrs</strong></span>
              <span>Total Minutes: <strong className="text-white font-mono-code">{timeResult.totalMinutes} min</strong></span>
            </div>
          </div>

          {/* Time Inputs */}
          <div className="space-y-2.5 bg-slate-950/50 p-3 rounded-xl border border-slate-800">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Start Time</label>
                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-sm text-white font-mono-code focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">End Time</label>
                <input
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-sm text-white font-mono-code focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Deduct Break Time</span>
                <span className="text-indigo-300 font-mono-code font-semibold">{breakMins} mins</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {[0, 30, 45, 60].map((m) => (
                  <button
                    key={m}
                    onClick={() => setBreakMins(m)}
                    className={`py-1 text-xs font-semibold rounded-lg transition-colors ${
                      breakMins === m
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {m === 0 ? 'None' : `${m}m`}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. UNIT CONVERTER SIMULATOR */}
      {type === 'unit-converter' && (
        <div id="sim-unit-converter" className="space-y-3">
          {/* Category Tabs */}
          <div className="grid grid-cols-3 gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
            {(['length', 'weight', 'storage'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setUnitCategory(cat);
                  if (cat === 'length') { setFromUnit('m'); setToUnit('ft'); }
                  if (cat === 'weight') { setFromUnit('kg'); setToUnit('lb'); }
                  if (cat === 'storage') { setFromUnit('gb'); setToUnit('mb'); }
                }}
                className={`py-1 text-xs font-semibold capitalize rounded-md transition-colors ${
                  unitCategory === cat ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800 space-y-2.5">
            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Input Value</span>
                <span className="uppercase text-blue-400 font-mono-code">{fromUnit}</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={inputUnitVal}
                  onChange={(e) => setInputUnitVal(parseFloat(e.target.value) || 0)}
                  className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-white font-mono-code"
                />
                <select
                  value={fromUnit}
                  onChange={(e) => setFromUnit(e.target.value)}
                  className="bg-slate-800 border border-slate-700 rounded-lg px-2 text-xs text-white uppercase font-mono-code"
                >
                  {unitCategory === 'length' && (
                    <>
                      <option value="m">Meters (m)</option>
                      <option value="km">Kilometers (km)</option>
                      <option value="cm">Centimeters (cm)</option>
                      <option value="ft">Feet (ft)</option>
                      <option value="in">Inches (in)</option>
                      <option value="mi">Miles (mi)</option>
                    </>
                  )}
                  {unitCategory === 'weight' && (
                    <>
                      <option value="kg">Kilograms (kg)</option>
                      <option value="g">Grams (g)</option>
                      <option value="lb">Pounds (lb)</option>
                      <option value="oz">Ounces (oz)</option>
                    </>
                  )}
                  {unitCategory === 'storage' && (
                    <>
                      <option value="gb">Gigabytes (GB)</option>
                      <option value="mb">Megabytes (MB)</option>
                      <option value="tb">Terabytes (TB)</option>
                      <option value="kb">Kilobytes (KB)</option>
                    </>
                  )}
                </select>
              </div>
            </div>

            <div className="py-1 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 border border-slate-700">
                <ArrowLeftRight className="w-4 h-4" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Converted Output</span>
                <span className="uppercase text-emerald-400 font-mono-code">{toUnit}</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="flex-1 bg-slate-900 border border-emerald-800/40 rounded-lg px-3 py-1.5 text-base font-bold text-emerald-400 font-mono-code truncate">
                  {convertUnits()}
                </div>
                <select
                  value={toUnit}
                  onChange={(e) => setToUnit(e.target.value)}
                  className="bg-slate-800 border border-slate-700 rounded-lg px-2 py-2 text-xs text-white uppercase font-mono-code"
                >
                  {unitCategory === 'length' && (
                    <>
                      <option value="ft">Feet (ft)</option>
                      <option value="m">Meters (m)</option>
                      <option value="km">Kilometers (km)</option>
                      <option value="cm">Centimeters (cm)</option>
                      <option value="in">Inches (in)</option>
                      <option value="mi">Miles (mi)</option>
                    </>
                  )}
                  {unitCategory === 'weight' && (
                    <>
                      <option value="lb">Pounds (lb)</option>
                      <option value="kg">Kilograms (kg)</option>
                      <option value="g">Grams (g)</option>
                      <option value="oz">Ounces (oz)</option>
                    </>
                  )}
                  {unitCategory === 'storage' && (
                    <>
                      <option value="mb">Megabytes (MB)</option>
                      <option value="gb">Gigabytes (GB)</option>
                      <option value="tb">Terabytes (TB)</option>
                      <option value="kb">Kilobytes (KB)</option>
                    </>
                  )}
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. SCRATCHPAD SIMULATOR */}
      {type === 'scratchpad' && (
        <div id="sim-scratchpad" className="space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-300 pb-1 border-b border-slate-800">
            <span>Offline Checklist Staging</span>
            <span className="text-emerald-400 font-mono-code">{tasks.filter(t => t.done).length}/{tasks.length} Done</span>
          </div>

          <div className="space-y-1.5 max-h-[160px] overflow-y-auto pr-1">
            {tasks.map((task) => (
              <div
                key={task.id}
                onClick={() => {
                  setTasks(tasks.map(t => t.id === task.id ? { ...t, done: !t.done } : t));
                }}
                className={`flex items-center gap-2 p-2 rounded-lg text-xs cursor-pointer border transition-colors ${
                  task.done 
                    ? 'bg-slate-950/40 border-slate-800/40 text-slate-400 line-through' 
                    : 'bg-slate-800/80 border-slate-700/60 text-slate-200 hover:bg-slate-800'
                }`}
              >
                <div className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${
                  task.done ? 'bg-emerald-600 text-white' : 'border border-slate-600'
                }`}>
                  {task.done && <Check className="w-3 h-3" />}
                </div>
                <span className="truncate flex-1">{task.text}</span>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (newTaskInput.trim()) {
                setTasks([...tasks, { id: Date.now(), text: newTaskInput.trim(), done: false }]);
                setNewTaskInput('');
              }
            }}
            className="flex gap-1.5 pt-1"
          >
            <input
              type="text"
              placeholder="Add engineering checklist item..."
              value={newTaskInput}
              onChange={(e) => setNewTaskInput(e.target.value)}
              className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg"
            >
              Add
            </button>
          </form>
        </div>
      )}

      {/* Engineering Spec Footer */}
      <div className="mt-3.5 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Native Mobile Runtime
        </span>
        <span className="font-mono-code text-slate-400">0% Ad Bloat • 100% Offline</span>
      </div>
    </div>
  );
};
