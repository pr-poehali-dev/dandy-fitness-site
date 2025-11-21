import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [activity, setActivity] = useState('1.2');
  const [bmi, setBmi] = useState<number | null>(null);
  const [calories, setCalories] = useState<number | null>(null);

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (w > 0 && h > 0) {
      const bmiValue = w / (h * h);
      setBmi(parseFloat(bmiValue.toFixed(1)));
    }
  };

  const calculateCalories = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    const act = parseFloat(activity);

    if (w > 0 && h > 0 && a > 0) {
      let bmr;
      if (gender === 'male') {
        bmr = 10 * w + 6.25 * h - 5 * a + 5;
      } else {
        bmr = 10 * w + 6.25 * h - 5 * a - 161;
      }
      const tdee = bmr * act;
      setCalories(Math.round(tdee));
    }
  };

  const getBMIStatus = (bmiValue: number) => {
    if (bmiValue < 18.5) return { text: 'UNDERWEIGHT', color: 'text-blue-400' };
    if (bmiValue < 25) return { text: 'NORMAL', color: 'text-primary' };
    if (bmiValue < 30) return { text: 'OVERWEIGHT', color: 'text-yellow-400' };
    return { text: 'OBESE', color: 'text-destructive' };
  };

  const workoutPrograms = [
    {
      name: 'BEGINNER QUEST',
      level: 'LVL 1-3',
      duration: '30 MIN',
      description: 'Start your fitness journey',
      icon: 'Zap'
    },
    {
      name: 'WARRIOR MODE',
      level: 'LVL 4-7',
      duration: '45 MIN',
      description: 'Strength & endurance training',
      icon: 'Sword'
    },
    {
      name: 'BOSS FIGHT',
      level: 'LVL 8-10',
      duration: '60 MIN',
      description: 'Extreme challenges await',
      icon: 'Flame'
    }
  ];

  const trainers = [
    { name: 'ALEX', hp: 100, sp: 95, desc: 'Strength Master' },
    { name: 'MARIA', hp: 95, sp: 100, desc: 'Cardio Queen' },
    { name: 'IGOR', hp: 98, sp: 92, desc: 'Muscle Builder' }
  ];

  const schedules = [
    { day: 'MON', time: '07:00-22:00', classes: 'STRENGTH + CARDIO' },
    { day: 'TUE', time: '07:00-22:00', classes: 'YOGA + BOXING' },
    { day: 'WED', time: '07:00-22:00', classes: 'CROSSFIT + STRETCHING' },
    { day: 'THU', time: '07:00-22:00', classes: 'STRENGTH + CARDIO' },
    { day: 'FRI', time: '07:00-22:00', classes: 'YOGA + BOXING' },
    { day: 'SAT', time: '09:00-20:00', classes: 'GROUP TRAINING' },
    { day: 'SUN', time: '09:00-20:00', classes: 'RECOVERY SESSION' }
  ];

  const prices = [
    { name: 'BRONZE', price: '1990', features: ['1 MONTH', 'GYM ACCESS', 'LOCKER ROOM'] },
    { name: 'SILVER', price: '4990', features: ['3 MONTHS', 'GYM + POOL', '1 TRAINER SESSION', 'LOCKER ROOM'] },
    { name: 'GOLD', price: '8990', features: ['6 MONTHS', 'FULL ACCESS', 'UNLIMITED TRAINING', 'NUTRITION PLAN', 'VIP LOCKER'] }
  ];

  return (
    <div className="min-h-screen bg-background scanlines">
      <nav className="border-b-4 border-border p-4 sticky top-0 bg-background z-50">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-lg md:text-xl text-primary">⚡ 8-BIT FITNESS</h1>
          <div className="flex gap-2 md:gap-4 text-[8px] md:text-xs">
            <a href="#home" className="hover:text-accent transition-colors">HOME</a>
            <a href="#calc" className="hover:text-accent transition-colors">CALC</a>
            <a href="#programs" className="hover:text-accent transition-colors">PROGRAMS</a>
            <a href="#trainers" className="hover:text-accent transition-colors">TRAINERS</a>
            <a href="#schedule" className="hover:text-accent transition-colors">SCHEDULE</a>
            <a href="#prices" className="hover:text-accent transition-colors">PRICES</a>
            <a href="#contact" className="hover:text-accent transition-colors">CONTACT</a>
          </div>
        </div>
      </nav>

      <section id="home" className="container mx-auto px-4 py-12 md:py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-6 text-primary animate-pulse">LEVEL UP YOUR BODY</h2>
          <p className="text-xs md:text-sm mb-8 text-muted-foreground leading-relaxed">
            TRAIN LIKE A HERO • EAT LIKE A CHAMPION • BECOME A LEGEND
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button className="pixel-corners text-xs md:text-sm px-6 py-6">
              <Icon name="Gamepad2" className="mr-2" size={16} />
              START GAME
            </Button>
            <Button variant="outline" className="pixel-corners text-xs md:text-sm px-6 py-6">
              <Icon name="Trophy" className="mr-2" size={16} />
              VIEW ACHIEVEMENTS
            </Button>
          </div>
        </div>
      </section>

      <section id="calc" className="container mx-auto px-4 py-12 md:py-20">
        <h2 className="text-xl md:text-3xl text-center mb-10 text-primary">★ PLAYER STATS CALCULATOR ★</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <Card className="pixel-corners border-4">
            <CardHeader>
              <CardTitle className="text-sm md:text-base flex items-center gap-2">
                <Icon name="Activity" size={20} />
                BMI CALCULATOR
              </CardTitle>
              <CardDescription className="text-[10px] md:text-xs">BODY MASS INDEX</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-[10px] md:text-xs block mb-2">WEIGHT (KG)</label>
                <Input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="pixel-corners text-xs md:text-sm"
                  placeholder="70"
                />
              </div>
              <div>
                <label className="text-[10px] md:text-xs block mb-2">HEIGHT (CM)</label>
                <Input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="pixel-corners text-xs md:text-sm"
                  placeholder="175"
                />
              </div>
              <Button onClick={calculateBMI} className="w-full pixel-corners text-xs md:text-sm">
                <Icon name="Calculator" className="mr-2" size={16} />
                CALCULATE BMI
              </Button>
              {bmi !== null && (
                <div className="mt-4 p-4 bg-secondary pixel-corners border-2 border-border">
                  <p className="text-xs md:text-sm mb-2">YOUR BMI:</p>
                  <p className={`text-2xl md:text-4xl font-bold ${getBMIStatus(bmi).color}`}>{bmi}</p>
                  <p className={`text-[10px] md:text-xs mt-2 ${getBMIStatus(bmi).color}`}>
                    STATUS: {getBMIStatus(bmi).text}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="pixel-corners border-4">
            <CardHeader>
              <CardTitle className="text-sm md:text-base flex items-center gap-2">
                <Icon name="Utensils" size={20} />
                CALORIE CALCULATOR
              </CardTitle>
              <CardDescription className="text-[10px] md:text-xs">DAILY ENERGY NEEDS</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-[10px] md:text-xs block mb-2">AGE</label>
                <Input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="pixel-corners text-xs md:text-sm"
                  placeholder="25"
                />
              </div>
              <div>
                <label className="text-[10px] md:text-xs block mb-2">GENDER</label>
                <div className="flex gap-2">
                  <Button
                    variant={gender === 'male' ? 'default' : 'outline'}
                    onClick={() => setGender('male')}
                    className="flex-1 pixel-corners text-[10px] md:text-xs"
                  >
                    MALE
                  </Button>
                  <Button
                    variant={gender === 'female' ? 'default' : 'outline'}
                    onClick={() => setGender('female')}
                    className="flex-1 pixel-corners text-[10px] md:text-xs"
                  >
                    FEMALE
                  </Button>
                </div>
              </div>
              <div>
                <label className="text-[10px] md:text-xs block mb-2">ACTIVITY LEVEL</label>
                <select
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                  className="w-full p-2 bg-input border-2 border-border pixel-corners text-[10px] md:text-xs"
                >
                  <option value="1.2">SEDENTARY</option>
                  <option value="1.375">LIGHT ACTIVE</option>
                  <option value="1.55">MODERATE</option>
                  <option value="1.725">VERY ACTIVE</option>
                  <option value="1.9">EXTREME</option>
                </select>
              </div>
              <Button onClick={calculateCalories} className="w-full pixel-corners text-xs md:text-sm">
                <Icon name="Flame" className="mr-2" size={16} />
                CALCULATE CALORIES
              </Button>
              {calories !== null && (
                <div className="mt-4 p-4 bg-secondary pixel-corners border-2 border-border">
                  <p className="text-xs md:text-sm mb-2">DAILY CALORIES:</p>
                  <p className="text-2xl md:text-4xl font-bold text-primary">{calories}</p>
                  <p className="text-[10px] md:text-xs mt-2 text-muted-foreground">KCAL/DAY</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="programs" className="container mx-auto px-4 py-12 md:py-20 bg-secondary/30">
        <h2 className="text-xl md:text-3xl text-center mb-10 text-primary">★ TRAINING PROGRAMS ★</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {workoutPrograms.map((program, idx) => (
            <Card key={idx} className="pixel-corners border-4 hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Icon name={program.icon as any} size={32} className="text-primary" />
                  <span className="text-[10px] md:text-xs text-accent">{program.level}</span>
                </div>
                <CardTitle className="text-sm md:text-base">{program.name}</CardTitle>
                <CardDescription className="text-[10px] md:text-xs">{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] md:text-xs">DURATION:</span>
                  <span className="text-xs md:text-sm text-primary">{program.duration}</span>
                </div>
                <Button className="w-full pixel-corners text-[10px] md:text-xs">SELECT PROGRAM</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="trainers" className="container mx-auto px-4 py-12 md:py-20">
        <h2 className="text-xl md:text-3xl text-center mb-10 text-primary">★ ELITE TRAINERS ★</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {trainers.map((trainer, idx) => (
            <Card key={idx} className="pixel-corners border-4">
              <CardHeader>
                <div className="w-full aspect-square bg-gradient-to-br from-secondary to-muted mb-4 pixel-corners flex items-center justify-center text-4xl md:text-6xl">
                  💪
                </div>
                <CardTitle className="text-sm md:text-base">{trainer.name}</CardTitle>
                <CardDescription className="text-[10px] md:text-xs">{trainer.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div>
                    <div className="flex justify-between text-[10px] md:text-xs mb-1">
                      <span>HP:</span>
                      <span>{trainer.hp}/100</span>
                    </div>
                    <div className="h-2 bg-muted pixel-corners overflow-hidden">
                      <div className="h-full bg-destructive" style={{ width: `${trainer.hp}%` }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] md:text-xs mb-1">
                      <span>SP:</span>
                      <span>{trainer.sp}/100</span>
                    </div>
                    <div className="h-2 bg-muted pixel-corners overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${trainer.sp}%` }} />
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full pixel-corners text-[10px] md:text-xs">HIRE TRAINER</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="schedule" className="container mx-auto px-4 py-12 md:py-20 bg-secondary/30">
        <h2 className="text-xl md:text-3xl text-center mb-10 text-primary">★ WEEKLY SCHEDULE ★</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {schedules.map((schedule, idx) => (
            <Card key={idx} className="pixel-corners border-4">
              <CardContent className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
                <div className="flex items-center gap-4">
                  <span className="text-lg md:text-2xl font-bold text-primary w-12">{schedule.day}</span>
                  <div>
                    <p className="text-xs md:text-sm">{schedule.time}</p>
                    <p className="text-[10px] md:text-xs text-muted-foreground">{schedule.classes}</p>
                  </div>
                </div>
                <Button variant="outline" className="pixel-corners text-[10px] md:text-xs">BOOK</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="prices" className="container mx-auto px-4 py-12 md:py-20">
        <h2 className="text-xl md:text-3xl text-center mb-10 text-primary">★ MEMBERSHIP TIERS ★</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {prices.map((tier, idx) => (
            <Card key={idx} className="pixel-corners border-4 hover:border-accent transition-colors">
              <CardHeader>
                <CardTitle className="text-base md:text-lg text-center">{tier.name}</CardTitle>
                <div className="text-center py-4">
                  <span className="text-3xl md:text-5xl font-bold text-primary">{tier.price}</span>
                  <span className="text-xs md:text-sm text-muted-foreground"> ₽</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-[10px] md:text-xs">
                      <Icon name="Check" size={16} className="text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full pixel-corners text-[10px] md:text-xs">BUY NOW</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="container mx-auto px-4 py-12 md:py-20 bg-secondary/30">
        <h2 className="text-xl md:text-3xl text-center mb-10 text-primary">★ CONTACT US ★</h2>
        <div className="max-w-2xl mx-auto">
          <Card className="pixel-corners border-4">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center gap-4">
                <Icon name="MapPin" size={24} className="text-primary" />
                <div>
                  <p className="text-xs md:text-sm font-bold">LOCATION</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground">123 PIXEL STREET, GAME CITY</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Icon name="Phone" size={24} className="text-primary" />
                <div>
                  <p className="text-xs md:text-sm font-bold">PHONE</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground">+7 (999) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Icon name="Mail" size={24} className="text-primary" />
                <div>
                  <p className="text-xs md:text-sm font-bold">EMAIL</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground">INFO@8BITFITNESS.COM</p>
                </div>
              </div>
              <div className="pt-4 border-t-2 border-border">
                <p className="text-xs md:text-sm font-bold mb-4">HOURS</p>
                <p className="text-[10px] md:text-xs text-muted-foreground">MON-FRI: 07:00-22:00</p>
                <p className="text-[10px] md:text-xs text-muted-foreground">SAT-SUN: 09:00-20:00</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t-4 border-border p-6 text-center">
        <p className="text-[10px] md:text-xs text-muted-foreground">
          © 2025 8-BIT FITNESS • PRESS START TO CONTINUE
        </p>
      </footer>
    </div>
  );
};

export default Index;
