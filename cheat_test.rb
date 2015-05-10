instrument = "guitar"

5 / 2 #=> 2

5.to_f / 2 #=> 2.5

puts "I love music!" #=> I love music!

array = [1,2,3,4,5]

array.each {|a| a + 1} #=> [2,3,4,5,6]

if conditional
	block1
else
	block2
end

case conditional
when value1
	block1
when value2
	block2
else
	block3
end

def method_name(arguments)
	block
end

hash = {key1 => value1, key2 => value2}

new_hash = Hash.new()

min + Random.new.rand(max - min + 1) #returns a random number between min and max
3 + Random.new.rand(7 - 3 + 1) #returns a random number between 3 and 7
3 + Random.new.rand(5) #returns a random number betwen 3 and 7
